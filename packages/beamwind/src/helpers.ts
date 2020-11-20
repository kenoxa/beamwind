import type { Declarations, UnknownKeyHandler, PluginApply, PluginTokenResult } from './types'

import * as is from './is'
import { toFixed, joinTruthy, asTokens } from './util'

// Shared variables
let match: RegExpExecArray | null

export const apply: PluginApply = (...tokens: unknown[]): PluginTokenResult => (parse) =>
  parse(asTokens(tokens))

const withUnit = (value: string, unit?: string): string => (unit ? value + unit : value)

const divide = (
  dividend: string | number,
  divisor: string | number,
  unit?: string,
  factor?: number,
): string =>
  withUnit(String(toFixed((Number(dividend) / Number(divisor)) * (factor || 1), 7)), unit)

export const convertTo = (unit: string, screenUnit?: 'h' | 'w'): UnknownKeyHandler<string> => (
  value: string,
): undefined | string => {
  if (screenUnit && value === 'screen') {
    return `100v${screenUnit}`
  }

  if (is.numberLike(value)) {
    // X = 1 => 0.25rem
    return unit === 'rem' ? divide(value, 4, 'rem') : withUnit(value, unit)
  }

  if (unit === 'rem' && (match = /^(\d+)\/(\d+)$/.exec(value))) {
    // X = 4/6 => 66.6666%
    return divide(match[1], match[2], '%', 100)
  }
}

export const divideBy = (divisor: number): UnknownKeyHandler<string> => (dividend: string) =>
  divide(dividend, divisor)

export const defaultToKey: UnknownKeyHandler<string> = (key) => key

export const optional: UnknownKeyHandler<string> = () => ''

const positions = (resolve: (position: string) => undefined | string[] | void) => (
  value: string,
  position: string,
  prefix: string,
  suffix?: string,
): Declarations | undefined => {
  if (value) {
    const properties = position && resolve(position)

    if (properties && properties.length > 0) {
      // eslint-disable-next-line unicorn/no-reduce
      return properties.reduce((declarations, property) => {
        declarations[joinTruthy([prefix, property, suffix])] = value
        return declarations
      }, {} as Declarations)
    }
  }
}

const CORNERS: Record<string, undefined | string[]> = {
  t: ['top-left', 'top-right'],
  r: ['top-right', 'bottom-right'],
  b: ['bottom-left', 'bottom-right'],
  l: ['bottom-left', 'top-left'],
  tl: ['top-left'],
  tr: ['top-right'],
  bl: ['bottom-left'],
  br: ['bottom-right'],
}

export const corners = positions((key) => CORNERS[key])

const X_Y_TO_EDGES: Record<string, undefined | string> = { x: 'lr', y: 'tb' }

const EDGES: Record<string, undefined | string> = {
  t: 'top',
  r: 'right',
  b: 'bottom',
  l: 'left',
}

// Support several edges like 'tr'
// 'x' and 'y' can not be combined with others because size 'xl'
// Every char must be a edge position
// Sort to have consistent declaration ordering
export const edges = positions((key) =>
  (X_Y_TO_EDGES[key] || key)
    .split('')
    .sort()
    // eslint-disable-next-line unicorn/no-reduce, array-callback-return
    .reduce((result, edge) => {
      if (result && EDGES[edge]) {
        result.push(EDGES[edge] as string)
        return result
      }
    }, [] as string[] | undefined | void),
)

export const compose = <T>(
  first: UnknownKeyHandler<T>,
  ...handlers: UnknownKeyHandler<T>[]
): UnknownKeyHandler<T> => (key) =>
  // eslint-disable-next-line unicorn/no-reduce
  handlers.reduce((result, handler) => result || handler(key), first(key))
