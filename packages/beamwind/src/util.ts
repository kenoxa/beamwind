import type { Falsy, Token, DeepPartial } from './types'

import * as is from './is'

export const toFixed = (value: number, precision: number): number =>
  Number(value.toFixed(precision))

export const join = (parts: readonly string[], separator = '-'): string => parts.join(separator)

export const joinTruthy = (parts: readonly (string | Falsy)[], separator?: string): string =>
  join(parts.filter(Boolean) as string[], separator)

export const tail = <T extends string | readonly unknown[]>(array: T, startIndex = 1): T =>
  array.slice(startIndex) as T

export const format = (message: string, token?: string): string =>
  (token ? `Invalid token ${token}: ` : '') + message

export const fail = (message: string, token?: string): never => {
  throw new Error(format(message, token))
}

export interface Cache<V> {
  has(key: string): boolean
  get(key: string): V | undefined
  set(key: string, value: V): void
}

export const createCache = <V>(): Cache<V> => {
  if (typeof Map === 'function') {
    return new Map()
  }

  const store = Object.create(null) as Record<string, V>

  return {
    has(key) {
      return key in store
    },

    get(key) {
      return store[key]
    },

    set(key, value) {
      store[key] = value
    },
  }
}

const interleave = (strings: TemplateStringsArray, interpolations: Token[]): Token[] => {
  const result: Token[] = [strings[0]]

  for (let index = 0; index < interpolations.length; ) {
    // Join consecutive strings
    if (is.string(interpolations[index])) {
      ;(result[result.length - 1] as string) += (interpolations[index] as string) + strings[++index]
    } else {
      if (interpolations[index]) {
        result.push(interpolations[index])
      }

      result.push(strings[++index])
    }
  }

  return result
}

export const asTokens = (tokens: unknown[]): Token[] =>
  is.array(tokens[0]) && is.array(((tokens[0] as unknown) as TemplateStringsArray).raw)
    ? interleave((tokens[0] as unknown) as TemplateStringsArray, tail(tokens) as Token[])
    : (tokens as Token[])

/**
 * Find the array index of where to add an element to keep it sorted.
 *
 * @returns The insertion index
 */
export const sortedInsertionIndex = (array: readonly number[], element: number): number => {
  let high = array.length

  // Theres only one option then
  if (high === 0) return 0

  // Find position by binary search
  for (let low = 0; low < high; ) {
    const pivot = (high + low) >> 1

    // Less-Then-Equal to add new equal element after all existing equal elements (stable sort)
    if (array[pivot] <= element) {
      low = pivot + 1
    } else {
      high = pivot
    }
  }

  return high
}

/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/ban-types, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */
export const merge = <A extends object, B extends object>(
  a: A,
  b: DeepPartial<B> | undefined,
): A & B => {
  if (!(a && b)) {
    return (a || b) as A & B
  }

  const result = Object.create(null)

  Object.keys(a).forEach((key) => {
    result[key] = (a as any)[key]
  })

  Object.keys(b).forEach((key) => {
    result[key] = (b as any)[key]
  })

  return result as A & B
}
/* eslint-enable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/ban-types, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */
