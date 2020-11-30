import { createColorVariants } from '@beamwind/colors'

import type { ConfigurationOptions } from '@beamwind/types'

export type ThemeColors = Record<string, undefined | string>
export interface Options {
  colors?: ThemeColors
}

import { theme } from './theme'

// eslint-disable-next-line unicorn/prefer-includes
const isBaseColor = (key: string): boolean => key.indexOf('-') === -1

export default ({ colors }: Options = {}): ConfigurationOptions => ({
  theme: (source) => {
    const base = {
      ...source('colors'),
      ...theme.colors,
      ...colors,
    }

    return {
      extend: {
        ...theme,
        colors: Object.keys(base)
          .filter(isBaseColor)
          // eslint-disable-next-line unicorn/no-reduce
          .reduce((colors, key) => ({ ...colors, ...createColorVariants(colors, key) }), base),
      },
    }
  },
})
