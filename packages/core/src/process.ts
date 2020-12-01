import type {
  Token,
  Theme,
  ThemeValueResolver,
  ThemeSectionValueType,
  Plugin,
  PluginTokenResult,
  InjectKeyframes,
  PluginResult,
  SelectorDecorator,
} from './types'
import type { Context } from './context'

import * as is from './is'
import { tail, join, joinTruthy } from './util'

// Shared variables used during processing
let negate: string
let currentContext: Context

const variants: string[] = []
const classNames: string[] = []
const prefix: string[] = []

const theme: ThemeValueResolver = <Section extends keyof Theme>(
  section: Section,
  key: string | string[],
  optional?: boolean,
): ThemeSectionValueType<Theme[Section]> | undefined => {
  const value = currentContext.t(section, key, optional)

  return negate && value && is.string(value)
    ? (`calc(${value} * -1)` as ThemeSectionValueType<Theme[Section]>)
    : value
}

const keyframes: InjectKeyframes = (name, waypoints) =>
  currentContext.k(name, waypoints || currentContext.t('keyframes', name) || {})

const processTokenResult = (
  token: string,
  variants: readonly string[],
  result: string | PluginTokenResult,
): void => {
  const lastClassNameLength = classNames.length

  /* eslint-disable @typescript-eslint/no-use-before-define */
  startGrouping()

  if (is.string(result)) {
    parseString(result)
  } else {
    result(parse)
  }

  endGrouping()
  /* eslint-enable @typescript-eslint/no-use-before-define */

  // Cache created class names
  currentContext.s(token, variants, join(tail(classNames, lastClassNameLength), ' '))
}

const handlePluginResult = (
  token: string,
  variants: readonly string[],
  result: PluginResult | PluginTokenResult,
): boolean | number | void => {
  if (is.function(result) || is.string(result)) {
    return !(processTokenResult(token, variants, result) as unknown)
  }

  let suffix: string | SelectorDecorator | undefined

  if (is.array(result)) {
    suffix = result[0]
    result = result[1]
  }

  if (is.object(result)) {
    return classNames.push(
      currentContext.i(
        token,
        variants,
        result,
        is.string(suffix) ? (selector) => selector + (suffix as string) : suffix,
      ),
    )
  }
}

const translate = (token: string, variants: readonly string[]): unknown => {
  const className =
    // Return the marker class name
    (token === 'group' && currentContext.a(token)) || currentContext.g(token, variants)

  if (className != null) {
    return className && classNames.push(className)
  }

  let directive = token

  negate = ''

  if (directive[0] === '-') {
    negate = '-'
    directive = tail(directive)
  }

  let parts = directive.split('-')

  // Try to find a plugin to handle this token
  // example 'bg-gradient-to-r'
  // 1. 'bg-gradient-to-r' -> parts=['bg-gradient-to-r']
  // 2. 'bg-gradient-to'   -> parts=['bg-gradient-to', 'r']
  // 4. 'bg-gradient'      -> parts=['bg-gradient', 'to', 'r']
  // 5. 'bg'               -> parts=['bg', 'gradient', 'to', 'r']
  let plugin: Plugin

  for (let index = parts.length; index; index--) {
    const id = join(parts.slice(0, index))

    plugin = currentContext.p(id)

    if (plugin) {
      parts = tail(parts, index)
      parts.unshift(id)
      break
    }
  }

  if (
    !handlePluginResult(
      token,
      variants,
      is.function(plugin) ? plugin(parts, theme, { keyframes, tag: currentContext.a }) : plugin,
    )
  ) {
    currentContext.w(
      token,
      plugin ? `Plugin "${parts[0]}" had no result` : `No plugin for "${directive}" found`,
    )
  }
}

const reset = (array: unknown[]): void => {
  array.length = 0
}

const withBuffer = (next: (buffer: string) => unknown) => (buffer: string): string => {
  if (buffer) next(buffer)
  return ''
}

const startGrouping = (): void => {
  // Mark new variant grouping start
  variants.push('')
}

const endGrouping = (isVariant?: boolean): void => {
  // Pop variants until empty marker
  let lastVariant: string | undefined

  while ((lastVariant = variants.pop())) {
    /* No-Op */
  }

  if (isVariant && lastVariant != null) variants.push(lastVariant)
}

const saveVariant = withBuffer((buffer) => {
  variants.push(buffer)
})

const translateBuffer = withBuffer((buffer) => {
  const p = joinTruthy(prefix)
  const token = buffer === '&' ? p : (p && p + '-') + buffer

  if (token) {
    translate(token, variants.filter(Boolean))
  }
})

const parseString = (token: string, isGrouping?: boolean): void => {
  let char: string
  let buffer = ''

  for (let position = 0; position < token.length; ) {
    switch ((char = token[position++])) {
      case ':':
        buffer = saveVariant(buffer)
        break

      case '(':
        // If there is a buffer this is the prefix for all grouped tokens
        prefix.push(buffer)
        buffer = ''
        startGrouping()
        break

      case ')':
      case ' ':
      case '\t':
      case '\n':
      case '\r':
        if (buffer) {
          buffer = translateBuffer(buffer)
          endGrouping(char !== ')')
        } else if (char === ')') {
          endGrouping()
        }

        if (char === ')') {
          prefix.pop()
        }

        break

      default:
        buffer += char
    }
  }

  if (isGrouping) {
    saveVariant(buffer)
  } else {
    translateBuffer(buffer)
  }
}

const parseGroupedToken = (token: Token): void => {
  if (token) {
    startGrouping()
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    parse(token)
    endGrouping()
  }
}

const parseGroup = (key: string, token: Token): void => {
  if (token) {
    startGrouping()

    const isGrouping = is.string(token) || is.array(token) || is.object(token)

    parseString(key, isGrouping)

    if (isGrouping) {
      parseGroupedToken(token)
    }

    endGrouping()
  }
}

let nextTokenId = 0

const parse = (token: Token): void => {
  if (is.string(token)) {
    parseString(token)
  } else if (is.array(token)) {
    token.forEach(parseGroupedToken)
  } else if (is.function(token)) {
    handlePluginResult(
      `__${token.name}_${(++nextTokenId).toString(36)}`,
      variants.filter(Boolean),
      token(theme, { keyframes, tag: currentContext.a }),
    )
  } else if (is.object(token)) {
    Object.keys(token).forEach((key) => {
      parseGroup(key, token[key])
    })
  }
}

export const process = (token: Token[], context: Context): string => {
  if (currentContext) {
    throw new Error('There is already an active context')
  }

  currentContext = context

  reset(classNames)
  reset(variants)
  reset(prefix)

  try {
    token.forEach(parseGroupedToken)
  } finally {
    ;((currentContext as unknown) as undefined) = undefined
  }

  return join(classNames, ' ')
}