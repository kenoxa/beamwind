import { getContrastVariant, getShadeVariant } from './colors'

export * from './colors'

export type ThemeColors = Record<string, undefined | string>

export const createColorVariants = (
  colors: ThemeColors,
  key: string,
  color = colors[key],
): ThemeColors => {
  if (!color) return {}

  // TODO test these variants
  const hover = colors[`${key}-hover`] || getShadeVariant(color, 0.05)
  const active = colors[`${key}-active`] || getShadeVariant(color, 0.1)
  const selected = colors[`${key}-selected`] || getShadeVariant(color, 0.15)
  const disabled = colors[`${key}-disabled`] || getShadeVariant(color, -0.05)

  return {
    [key]: color,
    [`on-${key}`]: colors[`on-${key}`] || getContrastVariant(color),
    [`${key}-hover`]: hover,
    [`on-${key}-hover`]: colors[`on-${key}-hover`] || getContrastVariant(hover),
    [`${key}-active`]: active,
    [`on-${key}-active`]: colors[`on-${key}-active`] || getContrastVariant(active),
    [`${key}-disabled`]: disabled,
    [`on-${key}-disabled`]: colors[`on-${key}-disabled`] || getContrastVariant(disabled),
    [`${key}-selected`]: selected,
    [`on-${key}-selected`]: colors[`on-${key}-selected`] || getContrastVariant(selected),
  }
}
