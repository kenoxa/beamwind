import { join, tail } from './util'
import { isGroupVariant } from './variants'

export const escape =
  (typeof CSS !== 'undefined' && CSS.escape) ||
  // Simplified: escaping only special characters
  ((className: string): string => className.replace(/[!"#$%&'()*+,./:;<=>?@[\]^`{|}~]/g, '\\$&'))

export const isPseudoVariant = (variant: string): boolean => variant[0] === ':'
export const isAtRuleVariant = (variant: string): boolean => variant[0] === '@'

export const toClassName = (token: string, variants: readonly string[]): string => {
  const base = join(variants, ':')

  return (base && base + ':') + token
}

const createSelector = (
  className: string,
  variants: readonly string[],
  suffix: string,
  tag: (token: string) => string,
): string =>
  // eslint-disable-next-line unicorn/no-reduce
  variants.reduce(
    (selector, variant) =>
      // .group:hover .group-hover\:text-gray-500
      (isGroupVariant(variant) ? `.${escape(tag('group'))}:${tail(variant, 6)} ` : '') +
      selector +
      (isPseudoVariant(variant) ? variant : ''),
    '.' + escape(className),
  ) + suffix

export const createRule = (
  className: string,
  variants: readonly string[],
  declaration: string,
  suffix: string,
  tag: (token: string) => string,
): string => // eslint-disable-line max-params
  // eslint-disable-next-line unicorn/no-reduce
  variants.reduceRight(
    (rule, variant) => (isAtRuleVariant(variant) ? `${variant}{${rule}}` : rule),
    `${createSelector(className, variants, suffix, tag)}{${declaration}}`,
  )
