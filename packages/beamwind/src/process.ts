import type {
  Token,
  Theme,
  ThemeValueResolver,
  UnknownKeyHandler,
  Plugin,
  PluginTokenResult,
} from './types'
import type { Context } from './context'

import * as is from './is'
import { fail, tail, join } from './util'

// Shared variables used during processing
let negate: string
let currentContext: Context

const variants: string[] = []
const classNames: string[] = []

const theme: ThemeValueResolver = <P extends keyof Theme, K extends keyof NonNullable<Theme[P]>>(
  section: P,
  key?: string | undefined,
  handleUnknownKey?: UnknownKeyHandler<NonNullable<Theme[P]>[K]>,
): NonNullable<NonNullable<Theme[P]>[K]> => {
  key || (key = 'DEFAULT')

  const base = currentContext.t(section)

  let value = base && base[key]

  if (!value && is.function(handleUnknownKey)) {
    value = handleUnknownKey(key)
  }

  // TODO hint about possible values, did you mean ...
  return (is.string(value)
    ? value && negate + value
    : value || fail(`No theme value found for "${section}.${key}"`)) as NonNullable<
    NonNullable<Theme[P]>[K]
  >
}

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
  currentContext.s(token, variants, join(classNames.slice(lastClassNameLength), ' '))
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
      parts = parts.slice(index)
      parts.unshift(id)
      break
    }
  }

  let result = is.function(plugin)
    ? plugin(parts, theme, { keyframes: currentContext.k, variants })
    : plugin

  if (is.function(result) || is.string(result)) {
    return processTokenResult(token, variants, result)
  }

  let suffix: string | undefined

  if (is.array(result)) {
    suffix = result[0]
    result = result[1]
  }

  if (is.object(result)) {
    return classNames.push(currentContext.i(token, variants, result, suffix))
  }

  currentContext.w(token, `No translation for "${token}" found`)
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
  translate(buffer, variants.filter(Boolean))
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

const parse = (token: Token): void => {
  if (is.string(token)) {
    parseString(token)
  } else if (is.array(token)) {
    token.forEach(parseGroupedToken)
  } else if (is.object(token)) {
    Object.keys(token).forEach((key) => {
      parseGroup(key, token[key])
    })
  }
}

export const process = (token: Token[], context: Context): string => {
  if (currentContext) {
    return fail('There is already an active context')
  }

  currentContext = context

  reset(classNames)
  reset(variants)

  try {
    token.forEach(parseGroupedToken)
  } finally {
    ;((currentContext as unknown) as undefined) = undefined
  }

  return join(classNames, ' ')
}
