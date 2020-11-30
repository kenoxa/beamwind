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

const parseColorComponent = (chars: string, factor: number): number =>
  // eslint-disable-next-line unicorn/prefer-number-properties
  Math.round(parseInt(chars, 16) * factor)

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

const toHex = (value: number): string => ('0' + clamp(value, 0, 255).toString(16)).slice(-2)

const stringify = (rgb: RGB): string => `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`

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

const colorToInt = (color: number): number => Math.round(color * 255)

const hslToRgb = (hsl: HSL): RGB => {
  if (hsl.s === 0) {
    // Achromatic
    return { r: hsl.l, g: hsl.l, b: hsl.l }
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

const luminanceHelper = (value: number): number => {
  const channel = value / 255
  return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
}

const getLuminance = (rgb: RGB): number =>
  Number(
    (
      0.2126 * luminanceHelper(rgb.r) +
      0.7152 * luminanceHelper(rgb.g) +
      0.0722 * luminanceHelper(rgb.b)
    ).toFixed(3),
  )

export const isLight = (color: string): boolean => {
  const rgb = parse(color)

  // Convert RGB to YIQ to better take into account the
  // luminance of the separate color channels:
  //
  // Further reading:
  //   - YIQ:
  //     https://en.wikipedia.org/wiki/YIQ
  //   - Calculating contrast:
  //     https://24ways.org/2010/calculating-color-contrast/

  const yiq = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000

  // Colour is considered `light` if greater than the midpoint:
  // eg. 256 / 2 = 128.
  return yiq >= 128
}

const smooth = (
  saturation: number,
  luminance: number,
  brightFactor: number,
  factor: number,
): number => saturation * (luminance > 0.6 ? brightFactor : factor)

export const getLightVariant = (color: string): string => {
  const rgb = parse(color)

  const hsl = rgbToHsl(rgb)

  const luminance = getLuminance(rgb)

  return stringify(
    hslToRgb({
      h: hsl.h,
      s: smooth(hsl.s, luminance, 0.8, 0.45),
      l: 0.95 - smooth(hsl.l, luminance, 0.03, 0.06),
    }),
  )
}

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

const findClosestAccessibleColor = (
  foregroundColor: string,
  backgroundColor: string,
  contrastRatio: number,
  darker: boolean,
): string => {
  const foregroundHSL = rgbToHsl(parse(foregroundColor))
  const backgroundHSL = rgbToHsl(parse(backgroundColor))

  let minLightness = darker ? 0.02 : foregroundHSL.l
  let maxLightness = darker ? foregroundHSL.l : 0.98

  let maxHSL = { ...foregroundHSL, l: maxLightness }
  let minHSL = foregroundHSL

  // If already meets contrast, return passed value
  if (contrast(foregroundHSL, backgroundHSL) >= contrastRatio) {
    return foregroundColor
  }

  // If max lightness fails to meet contrast, throw error
  if (contrast(maxHSL, backgroundHSL) < contrastRatio) {
    // Choose dark or white based on better contrast
    const nextColor =
      contrast({ h: 0, s: 0, l: 0 }, backgroundHSL) > contrast({ h: 0, s: 1, l: 1 }, backgroundHSL)
        ? '#000'
        : '#fff'

    if (foregroundColor === nextColor) {
      return nextColor
    }

    if (process.env.NODE_ENV === 'development') {
      console.warn(
        `Desired contrast ratio cannot be achieved,\nForeground: ${foregroundColor}\nBackground: ${backgroundColor}\nDesired Contrast: ${contrastRatio}\nActual Contrast: ${contrast(
          maxHSL,
          backgroundHSL,
        )}\nFalling back to: ${nextColor}`,
      )
    }

    return findClosestAccessibleColor(nextColor, backgroundColor, contrastRatio, darker)
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

    if (contrast(adjustedHSL, backgroundHSL) < contrastRatio) {
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

export const getContrastVariant = (color: string): string => {
  const darken = isLight(color)

  return findClosestAccessibleColor(
    // Start with dark gray or with a lighter variant
    darken ? '#1A202C' : getLightVariant(color),
    color,
    AA_CONTRAST,
    darken,
  )
}

const shade = (color: string, amount: number): string => {
  const hsl = rgbToHsl(parse(color))

  return stringify(
    hslToRgb({
      ...hsl,
      l: clamp(hsl.l - amount, 0, 1),
    }),
  )
}

export const getShadeVariant = (color: string, darker: number, lighter?: number): string =>
  shade(color, isLight(color) ? darker : lighter || darker * -1)
