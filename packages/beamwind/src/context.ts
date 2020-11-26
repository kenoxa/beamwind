import type {
  Plugin,
  Declarations,
  Theme,
  ConfigurationOptions,
  Injector,
  Hasher,
  WarnHandler,
  OnInit,
} from './types'

import * as is from './is'

import { createRule, toClassName } from './css'
import { isBrowser } from './env'
import { cssomInjector, noOpInjector } from './injectors'
import { makeTheme } from './theme'
import { autoprefix } from './prefix'
import { cyrb32 } from './hash'
import { createVariant } from './variants'
import { createCache, join, sortedInsertionIndex, format, merge, fail } from './util'
import { calculatePrecedence } from './precedence'
import { utilities as builtinUtilities } from './plugins'

export const consoleWarn: WarnHandler = (message, token): void =>
  console.warn(format(message, token))

export interface Context {
  /**
   * Theme section accessor
   */
  t: <P extends keyof Theme>(section: P) => Theme[P] | undefined

  /**
   * Plugin accessor
   */
  p: (id: string) => Plugin | undefined

  /** Creates marker class name. This is used by group-hover and group-focus */
  a: (token: string) => string

  /**
   * Get cached className
   */
  g: (token: string, variants: readonly string[]) => string | undefined

  /**
   * Set cached className
   */
  s: (token: string, variants: readonly string[], className: string) => void

  /**
   * Injects css
   */
  i: (
    token: string,
    variants: readonly string[],
    declarations: Declarations,
    suffix?: string,
  ) => string

  k: (name: string, waypoints: Record<string, Declarations>) => string

  /**
   * Configure
   */
  c: (options?: ConfigurationOptions | ConfigurationOptions[]) => void

  /**
   * Warn
   */
  w: (token: string, message: string) => void
}

export const createContext = (config?: ConfigurationOptions | ConfigurationOptions[]): Context => {
  let activeTheme = makeTheme()
  let activePlugins = builtinUtilities

  // Lazy set injector to prevent side-effects if a custom injector is provided in setup()
  let injector: Injector
  let nonce: string | undefined
  const inits: OnInit[] = []

  let prefix = autoprefix
  let hash: Hasher | false = cyrb32

  let warn: WarnHandler = consoleWarn

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
        warn: nextWarn = warn,
      } = {}) => {
        if (nextInjector && sortedPrecedences.length > 0) {
          fail('Changing the injector after first use is not supported')
        }

        activeTheme = makeTheme(nextTheme, activeTheme)
        activePlugins = merge(activePlugins, newPlugins)

        init && inits.push(init)
        injector = nextInjector || injector
        nonce = nextNonce

        prefix = nextPrefix
        hash = nextHash
        warn = nextWarn
      },
    )

  const serializeDeclarationList = (declarations: Declarations): string =>
    // eslint-disable-next-line unicorn/no-reduce
    Object.keys(declarations).reduce(
      (body, property) =>
        declarations[property]
          ? (body && body + ';') + prefix(property, declarations[property] as string)
          : body,
      '',
    )

  const variantToCss = (variant: string): string => createVariant(variant, activeTheme)

  const tag: Context['a'] = (token) => (hash ? hash(token) : token)

  const insert = (rule: string, presedence: number): void => {
    if (!injector) {
      injector = isBrowser ? cssomInjector({ nonce }) : noOpInjector()
    }

    const index = sortedInsertionIndex(sortedPrecedences, presedence)

    try {
      injector.insert(rule, index)
      sortedPrecedences.splice(index, 0, presedence)
    } catch (error) {
      console.warn(error)
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
      if (!sortedPrecedences.length && inits.length) {
        inits.forEach((init) => init((rule) => insert(rule, 0), activeTheme))
      }

      insert(rule, calculatePrecedence(variantsCss, declarations))

      cachedClassNames.set(className, true)
    }

    idToClassName.set(id, className)
  }

  setup(config)

  return {
    t: (section) => activeTheme[section],

    p: (id) => activePlugins[id],

    a: tag,

    g: (token, variants) => idToClassName.get(toClassName(token, variants)),

    s: (token, variants, className) => idToClassName.set(toClassName(token, variants), className),

    i(token, variants, declarations, suffix = '') {
      const id = toClassName(token, variants)

      let className = idToClassName.get(id)

      if (!className) {
        const variantsCss = variants.map(variantToCss)
        const declarationBody = serializeDeclarationList(declarations)

        className = hash ? hash(join([join(variants, '\0'), suffix, declarationBody], '\0')) : id

        inject(
          id,
          className,
          createRule(className, variantsCss, declarationBody, suffix, tag),
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

    w(token, message) {
      warn(message, token)
    },
  }
}
