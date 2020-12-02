import { getContrastVariant, getShadeVariant } from './colors'

export type ThemeColors = Record<string, undefined | string>

export interface Shades
  extends Record<string, undefined | number | [darker: number, lighter: number]> {
  hover?: number | [darker: number, lighter: number]
  active?: number | [darker: number, lighter: number]
  disabled?: number | [darker: number, lighter: number]
  selected?: number | [darker: number, lighter: number]
}

const isHEXColor = (color: string | undefined): color is string =>
  typeof color === 'string' && color[0] === '#'

const startsWith = (string: string, prefix: string): boolean =>
  string.slice(0, prefix.length) === prefix

export const createOnColor = (colors: ThemeColors, key: string, color = colors[key]): ThemeColors =>
  isHEXColor(color) && !startsWith(key, 'on-') && !colors[`on-${key}`]
    ? {
        [`on-${key}`]: getContrastVariant(color),
      }
    : {}

export const generateOnColors = (base: ThemeColors): ThemeColors =>
  Object.keys(base)
    // eslint-disable-next-line unicorn/no-reduce
    .reduce((colors, key) => ({ ...colors, ...createOnColor(colors, key) }), base)

export const createShadeVariants = (
  colors: ThemeColors,
  key: string,
  shades: Shades = {},
  color = colors[key],
): ThemeColors => {
  shades = {
    hover: [0.05, -0.05],
    focus: [0.1, -0.1],
    active: [0.15, -0.15],
    selected: [0.125, -0.125],
    disabled: [-0.085, 0.1],
    ...shades,
  }

  // Ignore keys which already have a shade suffix
  return isHEXColor(color) && !((key.split('-').pop() as string) in shades)
    ? Object.keys(shades)
        // eslint-disable-next-line unicorn/no-reduce
        .reduce((result, shade) => {
          const amount = shades[shade]

          if (amount != null && !colors[`${key}-${shade}`]) {
            result[`${key}-${shade}`] = Array.isArray(amount)
              ? getShadeVariant(color, amount[0], amount[1])
              : getShadeVariant(color, amount)
          }

          return result
        }, {} as ThemeColors)
    : {}
}

export const generateColors = (base: ThemeColors, shades?: Shades): ThemeColors =>
  Object.keys(base)
    // eslint-disable-next-line unicorn/no-reduce
    .reduce((colors, key) => {
      const shadesVariants = createShadeVariants(colors, key, shades)

      return {
        ...colors,
        ...createOnColor(colors, key),
        ...shadesVariants,
        ...generateOnColors(shadesVariants),
      }
    }, base)
