import type { ThemeResolver } from './types'
import { tail } from './util'

let size: string | undefined

const variants: Record<string, string> = {
  ':dark': '@media (prefers-color-scheme:dark)',
  ':sticky': '@supports ((position: -webkit-sticky) or (position:sticky))',
  ':motion-reduce': '@media (prefers-reduced-motion:reduce)',
  ':motion-safe': '@media (prefers-reduced-motion:no-preference)',
  ':first': ':first-child',
  ':last': ':last-child',
  ':even': ':nth-child(2n)',
  ':odd': ':nth-child(odd)',
}

/* eslint-disable no-return-assign, no-cond-assign */
export const createVariant = (variant: string, theme: ThemeResolver): string =>
  (size = theme('screens', tail(variant)))
    ? `@media (min-width: ${size})`
    : variants[variant] || variant
/* eslint-enable no-return-assign, no-cond-assign */
