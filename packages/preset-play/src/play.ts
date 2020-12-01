/* eslint-disable @typescript-eslint/consistent-type-assertions */
import type { Mode } from '@beamwind/types'

import * as is from './is'

const join = (parts: readonly string[], separator = '-'): string => parts.join(separator)

const isColor = (color: string): boolean => {
  if (typeof Option === 'function') {
    const s = new Option().style
    s.color = color
    return s.color !== ''
  }

  return /^#[\da-f]{3,8}$/i.test(color)
}

const asSize = (value: string): string | undefined =>
  /[-+]?(?:\d*\.)?\d+(?:ch|r?em|ex|ic|r?lh|v(?:[hwib]|min|max)|px|cm|mm|in|p[ct]|%)/.test(value)
    ? value
    : undefined

const asAngle = (value: string): string | undefined =>
  /[-+]?(?:\d*\.)?\d+(?:deg|g?rad|turn)/.test(value) ? value : undefined

const asTime = (value: string): string | undefined =>
  /[-+]?(?:\d*\.)?\d+m?s/.test(value) ? value : undefined

const asNumber = (value: string): string | undefined => (is.numberLike(value) ? value : undefined)

// Shared variables
let match: RegExpExecArray | null

const withUnit = (value: string, unit?: string): string => (unit ? value + unit : value)

const divide = (
  dividend: string | number,
  divisor: string | number,
  unit?: string,
  factor?: number,
): string =>
  withUnit(String(Number(((Number(dividend) / Number(divisor)) * (factor || 1)).toFixed(6))), unit)

const convert = (value: string, unit: string, screenUnit?: 'h' | 'w'): undefined | string => {
  if (value === 'px') return '1px'

  if (screenUnit && value === 'screen') {
    return `100v${screenUnit}`
  }

  if (is.numberLike(value)) {
    // X = 1 => 0.25rem
    return unit === 'rem' ? divide(value, 4, 'rem') : withUnit(value, unit)
  }

  if (unit === 'rem' && (match = /^(-?\d+)\/(-?\d+)$/.exec(value))) {
    // X = 4/6 => 66.6666%
    return divide(match[1], match[2], '%', 100)
  }
}

export const play = (parent: Mode): Mode => ({
  // eslint-disable-next-line complexity
  unknown(section, parts, optional, theme) {
    let value: unknown

    switch (section) {
      case 'borderWidth':
      case 'divideWidth':
      case 'ringWidth':
      case 'ringOffsetWidth':
      case 'borderRadius':
        if (parts.length === 1) {
          value = convert(parts[0], 'px') || asSize(parts[0])
        }

        break

      case 'spacing':
      case 'letterSpacing':
      case 'lineHeight':
      case 'gap':
      case 'inset':
      case 'translate':
      case 'fontSize':
        if (parts.length === 1) {
          value = convert(parts[0], 'rem') || asSize(parts[0])
        }

        break

      case 'durations':
      case 'transitionDuration':
      case 'transitionDelay':
        if (parts.length === 1) {
          value = convert(parts[0], 'ms') || asTime(parts[0])
        }

        break

      case 'opacity':
      case 'backgroundOpacity':
      case 'borderOpacity':
      case 'scale':
        if (parts.length === 1) {
          value = asNumber(parts[0]) && divide(parts[0], 100)
        }

        break

      case 'rotate':
      case 'skew':
        // '180deg'
        // '0.25turn'
        // 'to left'
        if (parts.length === 1) {
          value = convert(parts[0], 'deg') || asAngle(parts[0])
        }

        break

      case 'width':
      case 'maxWidth':
        // .w-64	width: 16rem;
        // .w-auto	width: auto;
        // .w-px	width: 1px;
        // .w-1/2	width: 50%;
        // .w-full	width: 100%;
        // .w-screen	width: 100vw;
        if (parts.length === 1) {
          value = convert(parts[0], 'rem', 'w') || asSize(parts[0])
        }

        break

      case 'height':
      case 'maxHeight':
        // .w-64	width: 16rem;
        // .w-auto	width: auto;
        // .w-px	width: 1px;
        // .w-1/2	width: 50%;
        // .w-full	width: 100%;
        // .w-screen	width: 100vw;
        if (parts.length === 1) {
          value = convert(parts[0], 'rem', 'h') || asSize(parts[0])
        }

        break

      // This includes 'transparent', #AAA or named colors
      case 'gradientColorStops':
      case 'borderColor':
      case 'backgroundColor':
      case 'colors':
      case 'divideColor':
      case 'fill':
      case 'placeholderColor':
      case 'ringColor':
      case 'ringOffsetColor':
      case 'stroke':
      case 'textColor':
        if (parts.length === 1) {
          if (parts[0] === 'current') {
            return 'currentColor'
          }

          if (isColor(parts[0])) {
            return parts[0]
          }
        }

        break

      case 'order':
      case 'strokeWidth':
      case 'fontWeight':
      case 'zIndex':
        if (parts.length === 1) {
          value = asNumber(parts[0])
        }

        break

      case 'transitionProperty':
      case 'transitionTimingFunction':
        if (parts.length > 0) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-explicit-any
          return join(parts) as any
        }

        break
    }

    return value == null ? parent.unknown(section, parts, optional, theme) : value
  },

  warn: parent.warn,
})

/* eslint-enable @typescript-eslint/consistent-type-assertions */
