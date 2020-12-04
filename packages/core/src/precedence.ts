// Based on https://github.com/kripod/otion
// License MIT

import type { Declarations } from './types'

import { isAtRuleVariant } from './css'
import { join, tail } from './util'

// Shared variables
let precedence: number
let match: RegExpExecArray | null

// 0=none, 1=sm, 2=md, 3=lg, 4=xl, 5=2xl, 6=??, 7=??
// 0 - 31: 5 bits
//  576px -> 3
// 1536px -> 9
// 36rem -> 3
// 96rem -> 9
// eslint-disable-next-line no-return-assign
const responsivePrecedence = (css: string): number =>
  // eslint-disable-next-line no-cond-assign
  (match = /\(\s*min-width:\s*(\d+(?:.\d+)?)(p)?/.exec(css))
    ? +match[1] / (match[2] ? 15 : 1) / 10 // eslint-disable-line no-implicit-coercion
    : 0

// Colon and dash count of string (ascending): 0 -> 7 => 3 bits
const seperatorPrecedence = (string: string): number => {
  precedence = 0

  for (let index = string.length; index--; ) {
    // eslint-disable-next-line no-implicit-coercion
    if (~'-:,'.indexOf(string[index])) {
      ++precedence
    }
  }

  return precedence
}

// Pesude and groupd variant presedence
// Chars 3 - 8: Uniquely identifies a pseudo selector
// represented as a bit set for each relevant value
// 16 bits: one for each variant above plus one for unknown variants

// Sources:
// - https://bitsofco.de/when-do-the-hover-focus-and-active-pseudo-classes-apply/#orderofstyleshoverthenfocusthenactive
// - https://developer.mozilla.org/docs/Web/CSS/:active#Active_links
// - https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js#L718

/* eslint-disable capitalized-comments */
const PRECEDENCES_BY_PSEUDO_CLASS = [
  /* fi */ 'rst' /* : 0 */,
  /* la */ 'st' /* : 1 */,
  // ':even': 'nth-child(2n)',
  // ':odd': 'nth-child(odd)',
  /* nt */ 'h-chi' /* h-child(odd): 2 */,
  /* li */ 'nk' /* : 3 */,
  /* vi */ 'sited' /* : 4 */,
  /* em */ 'pty' /* : 5 */,
  /* ch */ 'ecked' /* : 6 */,
  /* gr */ 'oup-h' /* over : 7 */,
  /* gr */ 'oup-f' /* ocus : 8 */,
  /* fo */ 'cus-w' /* ithin : 9 */,
  /* ho */ 'ver' /* : 10 */,
  /* fo */ 'cus' /* : 11 */,
  /* fo */ 'cus-v' /* isible : 12 */,
  /* ac */ 'tive' /* : 13 */,
  /* di */ 'sable' /* d : 14 */,
]
/* eslint-enable capitalized-comments */

// eslint-disable-next-line no-return-assign
const pseudoPrecedence = (pseudoClass: string): number =>
  ~(precedence = PRECEDENCES_BY_PSEUDO_CLASS.indexOf(pseudoClass.slice(3, 8)))
    ? precedence
    : PRECEDENCES_BY_PSEUDO_CLASS.length

const accumulatePseudoPrecedence = (precedence: number, variant: string): number => {
  return precedence | (isAtRuleVariant(variant) ? 0 : 1 << pseudoPrecedence(variant))
}

// https://github.com/kripod/otion/blob/main/packages/otion/src/propertyMatchers.ts
// "+1": [
// 	/* ^border-.*(w|c|sty) */
// 	"border-.*(width,color,style)",

// 	/* ^[tlbr].{2,4}m?$ */
// 	"top",
// 	"left",
// 	"bottom",
// 	"right",

// 	/* ^c.{7}$ */
// 	"continue",
// ],

// "-1": [
// 	/* ^[fl].{5}l */
// 	"flex-flow",
// 	"line-clamp",

// 	/* ^g.{8}$ */
// 	"grid-area",

// 	/* ^pl */
// 	"place-content",
// 	"place-items",
// 	"place-self",
// ],

// group: 1 => +1
// group: 2 => -1
const PROPERTY_PRECEDENCE_CORRECTION_GROUPS = /^(?:(border-(?:[tlbr].{2,4}-)?(?:w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/

// 0 - 15 => 4 bits
const propertyPrecedence = (property: string): number => {
  // The property's baseline precedence is based on "-" counting
  const unprefixedProperty =
    property[0] === '-' ? tail(property, property.indexOf('-', 1) + 1) : property

  const match = PROPERTY_PRECEDENCE_CORRECTION_GROUPS.exec(unprefixedProperty)

  return (
    seperatorPrecedence(unprefixedProperty) +
    // eslint-disable-next-line no-implicit-coercion
    (match ? +!!match[1] /* +1 */ || -!!match[2] /* -1 */ : 0) +
    1
  )
}

// 0 - 15 => 4 bits
// Ignore vendor prefixed and custom properties
const declarationPropertyPrecedence = (property: string): number =>
  property[0] === '-' ? 0 : propertyPrecedence(property)

const descending = (value: number): number => Math.max(0, 15 - value)

// 0 - 15 => 4 bits
const declarationValuePrecedence = (property: string, value: string): number =>
  descending(seperatorPrecedence(value))

// 0 - 15 => 4 bits
const declarationsCountPrecedence = (declarations: Declarations): number =>
  descending(Object.keys(declarations).filter((property) => declarations[property]).length)

const max = (
  declarations: Declarations,
  iteratee: (property: string, value: string) => number,
): number =>
  // eslint-disable-next-line unicorn/no-reduce
  Object.keys(declarations).reduce(
    (result, property) =>
      declarations[property]
        ? Math.max(result, iteratee(property, declarations[property] as string))
        : result,
    0,
  )

export const calculatePrecedence = (
  variantsCss: readonly string[],
  declarations: Declarations,
): number => {
  const rp = responsivePrecedence(variantsCss[0] || '')

  // 37 bits
  return (
    // Variants: 25 bits
    // 5: responsive
    (((rp & 31) << 20) |
      // 4: precedence of other at-rules
      ((seperatorPrecedence(
        join((rp ? tail(variantsCss) : variantsCss).filter(isAtRuleVariant), ';'),
      ) &
        15) <<
        16) |
      // 16: pseudo and group variants
      // eslint-disable-next-line unicorn/no-reduce
      (variantsCss.reduce(accumulatePseudoPrecedence, 0) & 0xffff)) *
      // Declarations: 12 bits = 4096
      (1 << 12) +
    // 4: number of declarations (descending)
    (((declarationsCountPrecedence(declarations) & 15) << 8) |
      // 4: greatest precedence of properties
      ((max(declarations, declarationPropertyPrecedence) & 15) << 4) |
      // 4: greatest precedence of values
      (max(declarations, declarationValuePrecedence) & 15))
  )
}
