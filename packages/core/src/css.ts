import type { SelectorDecorator } from './types'
import { join, tail } from './util'

export const escape =
  (typeof CSS !== 'undefined' && CSS.escape) ||
  // Simplified: escaping only special characters
  ((className: string): string => className.replace(/[!"#$%&'()*+,./:;<=>?@[\]^`{|}~]/g, '\\$&'))

const isGroupVariant = (variant: string): boolean => variant.slice(0, 7) === ':group-'
const isPseudoVariant = (variant: string): boolean => variant[0] === ':' && !isGroupVariant(variant)
export const isAtRuleVariant = (variant: string): boolean => variant[0] === '@'

export const toClassName = (token: string, variants: readonly string[]): string => {
  const base = join(variants, '')

  return (base && tail(base) + ':') + token
}

const createSelector = (
  className: string,
  variants: readonly string[],
  selectorDecorator: SelectorDecorator,
  tag: (token: string) => string,
): string =>
  selectorDecorator(
    // eslint-disable-next-line unicorn/no-reduce
    variants.reduce(
      (selector, variant) =>
        // .group:hover .group-hover\:text-gray-500
        (isGroupVariant(variant) ? `.${escape(tag('group'))}:${tail(variant, 7)} ` : '') +
        selector +
        (isPseudoVariant(variant) ? variant : ''),
      '.' + escape(className),
    ),
  )

export const createRule = (
  className: string,
  variants: readonly string[],
  declaration: string,
  selectorDecorator: SelectorDecorator,
  tag: (token: string) => string,
): string => // eslint-disable-line max-params
  // eslint-disable-next-line unicorn/no-reduce
  variants.reduceRight(
    (rule, variant) => (isAtRuleVariant(variant) ? `${variant}{${rule}}` : rule),
    `${createSelector(className, variants, selectorDecorator, tag)}{${declaration}}`,
  )
