import type { ThemeResolver } from './types'

let size: string | undefined

const variants: Record<string, string> = {
  sticky: '@supports ((position: -webkit-sticky) or (position:sticky))',
  'motion-reduce': '@media (prefers-reduced-motion:reduce)',
  'motion-safe': '@media (prefers-reduced-motion:no-preference)',
}

export const isGroupVariant = (variant: string): boolean => variant.slice(0, 6) === 'group-'

/* eslint-disable no-return-assign, no-cond-assign */
export const createVariant = (variant: string, theme: ThemeResolver): string =>
  (size = theme('screens', variant))
    ? `@media (min-width: ${size})`
    : variants[variant] || (isGroupVariant(variant) && variant) || `:${variant}`
/* eslint-enable no-return-assign, no-cond-assign */
