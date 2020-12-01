import type { ThemeResolver } from './types'
import { tail } from './util'

let size: string | undefined

const variants: Record<string, string> = {
  ':sticky': '@supports ((position: -webkit-sticky) or (position:sticky))',
  ':motion-reduce': '@media (prefers-reduced-motion:reduce)',
  ':motion-safe': '@media (prefers-reduced-motion:no-preference)',
}

/* eslint-disable no-return-assign, no-cond-assign */
export const createVariant = (variant: string, theme: ThemeResolver): string =>
  (size = theme('screens', tail(variant)))
    ? `@media (min-width: ${size})`
    : variants[variant] || variant
/* eslint-enable no-return-assign, no-cond-assign */
