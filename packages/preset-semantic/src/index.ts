import { createColorVariants } from '@beamwind/colors'

export type ThemeColors = Record<string, undefined | string>
export interface Options {
  colors?: ThemeColors
}

// eslint-disable-next-line unicorn/prefer-includes
const isBaseColor = (key: string): boolean => key.indexOf('-') === -1

export default function preset({ colors }: Options = {}): { theme: { colors: ThemeColors } } {
  const base = {
    surface: '#fafafa',
    'on-surface': '#222',

    // TODO 'surface-primary': '#f9fafb',
    // 'on-surface-primary': '#111827',
    // 'surface-secondary': '#d1d5db',
    // 'on-surface-secondary': '#111827',
    // - `surface-primary`
    // - `surface-secondary`
    // - `surface-ternary`

    // https://seek-oss.github.io/braid-design-system/foundations/tones/
    primary: '#0d3880',
    secondary: '#e60278',
    caution: '#ffc600',
    critical: '#d0011b',
    info: '#1e468c',
    neutral: '#596581',
    positive: '#138a08',
    promote: '#9556b7',

    ...colors,
  }

  return {
    theme: {
      colors: Object.keys(base)
        .filter(isBaseColor)
        // eslint-disable-next-line unicorn/no-reduce
        .reduce((colors, key) => ({ ...colors, ...createColorVariants(colors, key) }), base),
    },
  }
}
