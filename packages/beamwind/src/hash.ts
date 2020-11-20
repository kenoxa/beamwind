import type { Hasher } from './types'

// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
const imul =
  Math.imul ||
  ((opA: number, opB: number): number => {
    /* eslint-disable unicorn/prefer-math-trunc */
    // Ensure that opB is an integer. opA will automatically be coerced.
    opB |= 0

    // Floating points give us 53 bits of precision to work with plus 1 sign bit
    // automatically handled for our convienence:
    // 1. 0x003fffff /*opA & 0x000fffff*/ * 0x7fffffff /*opB*/ = 0x1fffff7fc00001
    //    0x1fffff7fc00001 < Number.MAX_SAFE_INTEGER /*0x1fffffffffffff*/
    let result = (opA & 0x003fffff) * opB

    // 2. We can remove an integer coersion from the statement above because:
    //    0x1fffff7fc00001 + 0xffc00000 = 0x1fffffff800001
    //    0x1fffffff800001 < Number.MAX_SAFE_INTEGER /*0x1fffffffffffff*/
    if (opA & 0xffc00000 /* !== 0 */) result += ((opA & 0xffc00000) * opB) | 0

    return result | 0
    /* eslint-enable unicorn/prefer-math-trunc */
  })

// Based on https://stackoverflow.com/a/52171480
export const cyrb32: Hasher = (value: string): string => {
  let h = 9

  for (let index = value.length; index--; ) {
    h = imul(h ^ value.charCodeAt(index), 0x5f356495)
  }

  return '_' + ((h ^ (h >>> 9)) >>> 0).toString(36)
}
