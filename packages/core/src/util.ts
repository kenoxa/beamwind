import type { Falsy, Token } from './types'

import * as is from './is'

export const join = (parts: readonly string[], separator = '-'): string => parts.join(separator)

export const joinTruthy = (parts: readonly (string | Falsy)[], separator?: string): string =>
  join(parts.filter(Boolean) as string[], separator)

export const tail = <T extends string | readonly unknown[]>(array: T, startIndex = 1): T =>
  array.slice(startIndex) as T

export const identity = <T>(value: T): T => value

export const capitalize = (value: string): string => value[0].toUpperCase() + tail(value)

const uppercasePattern = /([A-Z])/g
const prefixAndLowerCase = (char: string): string => `-${char.toLowerCase()}`
export const hyphenate = (value: string): string => value.replace(uppercasePattern, prefixAndLowerCase)


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

export const merge = <A, B>(a: A, b: Partial<B> | undefined): A & B =>
  (a && b ? { ...a, ...b } : a || b || {}) as A & B
