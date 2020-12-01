import type {
  Plugin,
  Declarations,
  ConfigurationOptions,
  Injector,
  Hasher,
  OnInit,
  ThemeValueResolver,
  SelectorDecorator,
  ThemeResolver,
  Theme,
} from './types'

import * as is from './is'

import { createRule, toClassName } from './css'
import { isBrowser } from './env'
import { cssomInjector, noOpInjector } from './injectors'
import { theme } from './theme'
import { autoprefix } from './prefix'
import { cyrb32 } from './hash'
import { createVariant } from './variants'
import { createCache, join, sortedInsertionIndex, merge, identity } from './util'
import { calculatePrecedence } from './precedence'
import { utilities as builtinUtilities } from './plugins'
import { warn } from './modes'

export interface Context {
  /**
   * Theme section accessor
   */
  t: ThemeValueResolver

  /**
   * Plugin accessor
   */
  p: (id: string) => Plugin | undefined

  /** Creates marker class name. This is used by group-hover and group-focus */
  a: (directive: string) => string

  /**
   * Get cached className
   */
  g: (directive: string, variants: readonly string[]) => string | undefined

  /**
   * Set cached className
   */
  s: (directive: string, variants: readonly string[], className: string) => void

  r: ThemeResolver

  /**
   * Injects css
   */
  i: (
    directive: string,
    variants: readonly string[],
    declarations: Declarations,
    selectorDecorator?: SelectorDecorator,
  ) => string

  k: (name: string, waypoints: Record<string, Declarations>) => string

  /**
   * Configure
   */
  c: (options?: ConfigurationOptions | ConfigurationOptions[]) => void

  /**
   * Warn
   */
  w: (directive: string, message: string) => void
}

export const createContext = (config?: ConfigurationOptions | ConfigurationOptions[]): Context => {
  let activeTheme = theme
  let activePlugins = builtinUtilities

  // Lazy set injector to prevent side-effects if a custom injector is provided in setup()
  let injector: Injector
  let nonce: string | undefined
  const inits: OnInit[] = []

  let prefix = autoprefix
  let hash: Hasher | false = cyrb32

  let mode = warn

  const idToClassName = createCache<string>()
  const cachedClassNames = createCache<boolean>()
  const sortedPrecedences: number[] = []

  const setup = (nextConfig?: ConfigurationOptions | ConfigurationOptions[]): void =>
    (is.array(nextConfig) ? nextConfig : [nextConfig]).forEach(
      ({
        theme: nextTheme,
        plugins: newPlugins,
        init,
        injector: nextInjector,
        nonce: nextNonce = nonce,
        prefix: nextPrefix = prefix,
        hash: nextHash = hash,
        mode: nextMode = mode,
      } = {}) => {
        if (nextInjector && sortedPrecedences.length > 0) {
          throw new Error('Changing the injector after first use is not supported')
        }

        nextTheme && (activeTheme = activeTheme.extend(nextTheme))
        activePlugins = merge(activePlugins, newPlugins)

        init && inits.push(init)
        injector = nextInjector || injector
        nonce = nextNonce

        prefix = nextPrefix
        hash = nextHash
        mode = nextMode
      },
    )

  const serializeDeclaration = (property: string, value: string | string[]): string =>
    is.array(value)
      ? join(
          value.filter(Boolean).map((value) => prefix(property, value)),
          ';',
        )
      : prefix(property, value)

  const serializeDeclarationList = (declarations: Declarations): string =>
    // eslint-disable-next-line unicorn/no-reduce
    Object.keys(declarations).reduce(
      (body, property) =>
        declarations[property]
          ? (body && body + ';') +
            serializeDeclaration(property, declarations[property] as string | string[])
          : body,
      '',
    )

  const variantToCss = (variant: string): string => createVariant(variant, activeTheme)

  const tag: Context['a'] = (directive) => (hash ? hash(directive) : directive)

  const insert = (rule: string, presedence: number): void => {
    if (!injector) {
      injector = isBrowser ? cssomInjector({ nonce }) : noOpInjector()
    }

    const index = sortedInsertionIndex(sortedPrecedences, presedence)

    try {
      injector.insert(rule, index)
      sortedPrecedences.splice(index, 0, presedence)
    } catch (error) {
      // Filter out vendor specific pseudo classes to prevent unnecessary warnings
      // ::-moz-focus-inner
      // :-moz-focusring
      if (!/:-[mwo]/.test(rule)) {
        mode.warn((error as Error).message)
      }
    }
  }

  const inject = (
    id: string,
    className: string,
    rule: string,
    variantsCss: readonly string[],
    declarations: Declarations,
  ): void => {
    if (!cachedClassNames.has(className)) {
      // eslint-disable-next-line unicorn/explicit-length-check
      if (inits.length) {
        inits.forEach((init) => init((rule) => insert(rule, 0), activeTheme))
        inits.length = 0
      }

      insert(rule, calculatePrecedence(variantsCss, declarations))

      cachedClassNames.set(className, true)
    }

    idToClassName.set(id, className)
  }

  setup(config)

  return {
    t: (section, keypath, optional) => {
      const parts = is.array(keypath) ? keypath : [keypath]

      const value = activeTheme(section, join(parts) || 'DEFAULT')

      return value == null
        ? (mode.unknown(section, parts, optional, activeTheme) as undefined)
        : value
    },

    p: (id) => activePlugins[id],

    a: tag,

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    r: ((section: keyof Theme, key: string, defaultValue: any): unknown =>
      activeTheme(section, key, defaultValue)) as ThemeResolver,

    g: (directive, variants) => idToClassName.get(toClassName(directive, variants)),

    s: (directive, variants, className) =>
      idToClassName.set(toClassName(directive, variants), className),

    i(directive, variants, declarations, selectorDecorator = identity) {
      const id = toClassName(directive, variants)

      let className = idToClassName.get(id)

      if (!className) {
        const variantsCss = variants.map(variantToCss)
        const declarationBody = serializeDeclarationList(declarations)

        className = hash
          ? hash(join([join(variantsCss, '\0'), selectorDecorator(''), declarationBody], '\0'))
          : id

        inject(
          id,
          className,
          createRule(className, variantsCss, declarationBody, selectorDecorator, tag),
          variantsCss,
          declarations,
        )
      }

      return className
    },

    k(name, waypoints) {
      const id = '\0' + name

      let className = idToClassName.get(id)

      if (!className) {
        // eslint-disable-next-line unicorn/no-reduce
        const declarationBody = Object.keys(waypoints).reduce(
          (body, waypoint) =>
            `${body}${waypoint}{${serializeDeclarationList(waypoints[waypoint])}}`,
          '',
        )

        className = hash ? hash(declarationBody) : name

        const rule = `@keyframes ${className}{${declarationBody}}`

        inject(id, className, rule, [rule], {})
      }

      return className
    },

    c: setup,

    w(directive, message) {
      mode.warn(message, directive)
    },
  }
}
