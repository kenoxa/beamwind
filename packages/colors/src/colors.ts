// Based on https://github.com/seek-oss/braid-design-system/blob/master/lib/utils/a11y/index.ts
// License MIT
//
// Based on https://github.com/styled-components/polished
// License MIT

const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max)

interface RGB {
  r: number
  g: number
  b: number
}

interface HSL {
  h: number
  s: number
  l: number
}

const colorToInt = (color: number, factor = 255): number => Math.round(color * factor)

const parseColorComponent = (chars: string, factor: number): number =>
  // eslint-disable-next-line unicorn/prefer-number-properties
  colorToInt(parseInt(chars, 16), factor)

const toHex = (value: number): string => ('0' + clamp(value, 0, 255).toString(16)).slice(-2)

const stringify = (rgb: RGB): string => `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`

const parse = (color: string): RGB => {
  if (color[0] === '#') {
    const length = (color.length - 1) / 3
    const factor = [17, 1, 0.062272][length - 1]

    /* eslint-disable unicorn/prefer-string-slice */
    return {
      r: parseColorComponent(color.substr(1, length), factor),
      g: parseColorComponent(color.substr(1 + length, length), factor),
      b: parseColorComponent(color.substr(1 + 2 * length, length), factor),
    }

    /* eslint-enable unicorn/prefer-string-slice */
  }

  throw new Error(`Can not parse color ${color}`)
}

const rgbToHsl = (rgb: RGB): HSL => {
  const red = rgb.r / 255
  const green = rgb.g / 255
  const blue = rgb.b / 255

  const max = Math.max(red, green, blue)
  const min = Math.min(red, green, blue)
  const lightness = (max + min) / 2

  if (max === min) {
    // Achromatic
    return { h: 0, s: 0, l: lightness }
  }

  let hue
  const delta = max - min
  const saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min)
  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0)
      break
    case green:
      hue = (blue - red) / delta + 2
      break
    default:
      // Blue case
      hue = (red - green) / delta + 4
      break
  }

  return { h: hue * 60, s: saturation, l: lightness }
}

const hslToRgb = (hsl: HSL): RGB => {
  if (hsl.s === 0) {
    // Achromatic
    return {
      r: colorToInt(hsl.l),
      g: colorToInt(hsl.l),
      b: colorToInt(hsl.l),
    }
  }

  // Formulae from https://en.wikipedia.org/wiki/HSL_and_HSV
  const huePrime = (((hsl.h % 360) + 360) % 360) / 60
  const chroma = (1 - Math.abs(2 * hsl.l - 1)) * hsl.s
  const secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1))

  let red = 0
  let green = 0
  let blue = 0

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma
    green = secondComponent
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent
    green = chroma
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma
    blue = secondComponent
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent
    blue = chroma
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent
    blue = chroma
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma
    blue = secondComponent
  }

  const lightnessModification = hsl.l - chroma / 2

  return {
    r: colorToInt(red + lightnessModification),
    g: colorToInt(green + lightnessModification),
    b: colorToInt(blue + lightnessModification),
  }
}

const luminanace = (value: number): number => {
  value /= 255
  return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
}

const getLuminance = (rgb: RGB): number =>
  luminanace(rgb.r) * 0.2126 + luminanace(rgb.g) * 0.7152 + luminanace(rgb.b) * 0.0722

const isBright = (luminance: number): boolean => luminance > 0.6

export const isLight = (color: string): boolean => isBright(getLuminance(parse(color)))

const AA_CONTRAST = 4.52
// AA_NON_TEXT_CONTRAST = 3

// http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#key-terms
const contrast = (color1: HSL, color2: HSL): number => {
  // `0.05` seems to be to avoid "divide by zero"
  // errors in the case of black
  const L1 = getLuminance(hslToRgb(color1)) + 0.05
  const L2 = getLuminance(hslToRgb(color2)) + 0.05

  return L1 < L2 ? L2 / L1 : L1 / L2
}

const smooth = (value: number, luminance: number, brightFactor: number, factor: number): number =>
  value * (isBright(luminance) ? brightFactor : factor)

const makeLightnessTransformer = (transform: (hsl: HSL, luminance: number) => HSL) => (
  color: string,
): string => {
  const rgb = parse(color)

  return stringify(hslToRgb(transform(rgbToHsl(rgb), getLuminance(rgb))))
}

export const getLightVariant = makeLightnessTransformer((hsl, luminance) => ({
  h: hsl.h,
  s: smooth(hsl.s, luminance, 0.8, 0.45),
  l: 0.95 - smooth(hsl.l, luminance, 0.03, 0.06),
}))

export const getDarkVariant = makeLightnessTransformer((hsl, luminance) => ({
  h: hsl.h,
  s: smooth(hsl.s, luminance, 0.45, 0.8),
  l: 0.05 + smooth(hsl.l, luminance, 0.06, 0.03),
}))

const findClosestAccessibleColor = (
  backgroundColor: string,
  darker = isLight(backgroundColor),
  foregroundColor = darker ? getDarkVariant(backgroundColor) : getLightVariant(backgroundColor),
): string => {
  const foregroundHSL = rgbToHsl(parse(foregroundColor))
  const backgroundHSL = rgbToHsl(parse(backgroundColor))

  let minLightness = darker ? 0.02 : foregroundHSL.l
  let maxLightness = darker ? foregroundHSL.l : 0.98

  let maxHSL = { ...foregroundHSL, l: maxLightness }
  let minHSL = foregroundHSL

  // If already meets contrast, return passed value
  if (contrast(foregroundHSL, backgroundHSL) >= AA_CONTRAST) {
    return foregroundColor
  }

  // If max lightness fails to meet contrast, throw error
  if (contrast(maxHSL, backgroundHSL) < AA_CONTRAST) {
    // Select black or white based on higher contrast ratio
    return contrast({ h: 0, s: 0, l: 0 }, backgroundHSL) >
      contrast({ h: 0, s: 1, l: 1 }, backgroundHSL)
      ? '#000'
      : '#fff'
  }

  let lastMinHSL
  let lastMaxHSL
  let adjustedLightness
  let adjustedHSL = foregroundHSL

  do {
    lastMinHSL = minHSL
    lastMaxHSL = maxHSL

    adjustedLightness = (minLightness + maxLightness) / 2
    adjustedHSL = { ...adjustedHSL, l: adjustedLightness }

    if (contrast(adjustedHSL, backgroundHSL) < AA_CONTRAST) {
      if (darker) {
        maxLightness = adjustedLightness
        maxHSL = adjustedHSL
      } else {
        minLightness = adjustedLightness
        minHSL = adjustedHSL
      }
    } else if (darker) {
      minLightness = adjustedLightness
      minHSL = adjustedHSL
    } else {
      maxLightness = adjustedLightness
      maxHSL = adjustedHSL
    }
  } while (minHSL.l !== lastMinHSL.l || maxHSL.l !== lastMaxHSL.l)

  return stringify(hslToRgb(minHSL))
}

/**
 * Finds the closest [accessible color](https://contrast-ratio.com/).
 *
 * @param color - in [#-hexadecimal notation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) (like `#RRGGBB` or `#RGB`)
 * @returns contrast color in [#-hexadecimal notation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
 */
export const getContrastVariant = (color: string): string => findClosestAccessibleColor(color)

/**
 * Changes the lightness of `color` by the given `amount`.
 *
 * @param color - to shade in [#-hexadecimal notation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) (like `#RRGGBB` or `#RGB`)
 * @param amount - value between `0` and `1`
 * @returns shaded color in [#-hexadecimal notation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
 */
export const shade = (color: string, amount: number): string => {
  const hsl = rgbToHsl(parse(color))

  return stringify(
    hslToRgb({
      ...hsl,
      l: clamp(hsl.l - amount, 0, 1),
    }),
  )
}

/**
 * Creates a {@link shade} color using `ifLight` if `color` [is light]{@link isLight}
 * otherwise `ifDark`.
 *
 * @param color - to shade in [#-hexadecimal notation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) (like `#RRGGBB` or `#RGB`)
 * @param ifLight - amount between `0` and `1` if `color` [is light]{@link isLight}
 * @param ifDark - amount between `0` and `1` if `color` is dark (eg [not light]{@link isLight})
 * @returns shaded color in [#-hexadecimal notation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
 */
export const getShadeVariant = (color: string, ifLight: number, ifDark = ifLight * -1): string =>
  shade(color, isLight(color) ? ifLight : ifDark)
