import type { Declarations } from './common'

export type UnknownKeyHandler<T> = (key: string) => undefined | T

export type ThemeValueResolver = <P extends keyof Theme, K extends keyof NonNullable<Theme[P]>>(
  section: P,
  key?: string | undefined,
  handleUnknownKey?: UnknownKeyHandler<NonNullable<Theme[P]>[K]>,
) => NonNullable<NonNullable<Theme[P]>[K]>

export interface ThemeScreens extends Record<string, undefined | string> {
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
}

/**
 * CSS Properties: color, background-color, border-color
 */
export interface ThemeColors extends Record<string, undefined | string> {
  // These are defaults set in src/theme.ts
  // surface: string
  // 'on-surface': string
  // primary: string
  // 'on-primary': string
  // secondary: string
  // 'on-secondary': string
  // caution: string
  // 'on-caution': string
  // critical: string
  // 'on-critical': string
  // info: string
  // 'on-info': string
  // neutral: string
  // 'on-neutral': string
  // positive: string
  // 'on-positive': string
  // promote: string
  // 'on-promote': string
}

export interface ThemeBorderWidth extends Record<string, undefined | string> {
  DEFAULT: string
}

export interface ThemeColorsWithDefault extends ThemeColors {
  DEFAULT: string
}

type ThemeFontSizeDefintion =
  | string
  | [size: string, lineHeight: string]
  | [size: string, options: { lineHeight?: string; letterSpacing?: string }]

export interface ThemeFontSize extends Record<string, undefined | ThemeFontSizeDefintion> {
  base: ThemeFontSizeDefintion
  xs: ThemeFontSizeDefintion
  sm: ThemeFontSizeDefintion
  md: ThemeFontSizeDefintion
  lg: ThemeFontSizeDefintion
  xl: ThemeFontSizeDefintion
  '2xl': ThemeFontSizeDefintion
  '3xl': ThemeFontSizeDefintion
  '4xl': ThemeFontSizeDefintion
  '5xl': ThemeFontSizeDefintion
  '6xl': ThemeFontSizeDefintion
  '7xl': ThemeFontSizeDefintion
  '8xl': ThemeFontSizeDefintion
  '9xl': ThemeFontSizeDefintion
}

export interface ThemeFontFamily extends Record<string, undefined | string> {
  sans: string
  serif: string
  mono: string
}

export interface ThemeFontWeight extends Record<string, undefined | string> {
  thin: string
  extralight: string
  light: string
  normal: string
  medium: string
  semibold: string
  bold: string
  extrabold: string
  black: string
}

export interface ThemeLetterSpacing extends Record<string, undefined | string> {
  tighter: string
  tight: string
  normal: string
  wide: string
  wider: string
  widest: string
}

export interface ThemeLineHeight extends Record<string, undefined | string> {
  none: string
  tight: string
  snug: string
  normal: string
  relaxed: string
  loose: string
}

/**
 * CSS Properties: border-width, stroke-width
 */
export interface ThemeStrokeWidth extends Record<string, undefined | string> {}

/**
 * CSS Properties: border-radius
 */
export interface ThemeBorderRadius extends Record<string, undefined | string> {
  DEFAULT: string
  none: string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
  full: string
}

/**
 * CSS Properties: box-shadow, text-shadow
 */
export interface ThemeBoxShadow extends Record<string, undefined | string> {
  DEFAULT: string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
  inner: string
  outline: string
}

/**
 * CSS Properties: margin, margin-top, margin-right, margin-bottom, margin-left,
 * padding, padding-top, padding-right, padding-bottom, padding-left,
 * grid-gap, grid-column-gap, grid-row-gap
 */
export interface ThemeSpacing extends Record<string, undefined | string> {
  px: string
  auto: string
  none: string
  base: string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
  '4xl': string
  '5xl': string
  '6xl': string
}

/**
 * CSS Properties: width, height, min-width, max-width, min-height, max-height
 */
export interface ThemeSizes extends Record<string, undefined | string> {
  full: string
  auto: string
  none: string
  min: string
  max: string
  prose: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
  '4xl': string
  '5xl': string
  '6xl': string
  // 'screen': '100vh' || '100vw',
  // 'screen-sm': string
  // 'screen-md': string
  // 'screen-lg': string
  // 'screen-xl': string
  // 'screen-2xl': string
}

export interface ThemeOrder extends Record<string, undefined | string> {
  first: string
  last: string
  none: string
}

export interface ThemeFlex extends Record<string, undefined | string> {
  1: string
  auto: string
  initial: string
  none: string
}

export interface ThemeOpacity extends Record<string, undefined | string> {}

export interface ThemeDurations extends Record<string, undefined | string> {}

export interface ThemeAngle extends Record<string, undefined | string> {}

export interface ThemeTransitionProperty extends Record<string, undefined | string> {
  DEFAULT: string
  colors: string
  shadow: string
}

export interface ThemeTransitionTimingFunction extends Record<string, undefined | string> {
  DEFAULT: string
  in: string
  out: string
  'in-out': string
}

export type ThemeAnimationDefintion =
  | string
  | [shorthand: string]
  | [shorthand: string, name: string]

export interface ThemeAnimation extends Record<string, undefined | ThemeAnimationDefintion> {
  none: string
  spin: ThemeAnimationDefintion
  ping: ThemeAnimationDefintion
  pulse: ThemeAnimationDefintion
  bounce: ThemeAnimationDefintion
}

type ThemeKeyframesDefintion = Record<string, Declarations>

export interface ThemeKeyframes extends Record<string, undefined | ThemeKeyframesDefintion> {
  spin: ThemeKeyframesDefintion
  ping: ThemeKeyframesDefintion
  pulse: ThemeKeyframesDefintion
  bounce: ThemeKeyframesDefintion
}

export interface ThemeZIndex extends Record<string, undefined | string> {}

export interface ThemeScale extends Record<string, undefined | string> {}

export interface Theme {
  screens: ThemeScreens
  // Based on https://seek-oss.github.io/braid-design-system/foundations/tones
  // - critical, caution, positive, neutral, info, promote
  // - primary, secondary, secondary-inverted, neutral-inverted
  colors: ThemeColors
  spacing: ThemeSpacing
  sizes: ThemeSizes
  fontFamily: ThemeFontFamily
  fontSize: ThemeFontSize
  fontWeight: ThemeFontWeight
  letterSpacing: ThemeLetterSpacing
  lineHeight: ThemeLineHeight
  borderWidth: ThemeBorderWidth
  borderColor: ThemeColorsWithDefault
  divideWidth?: ThemeBorderWidth
  divideColor?: ThemeColorsWithDefault
  placeholderColor?: ThemeColorsWithDefault
  flex: ThemeFlex
  strokeWidth: ThemeStrokeWidth
  borderRadius: ThemeBorderRadius
  boxShadow: ThemeBoxShadow
  transitionProperty: ThemeTransitionProperty
  transitionTimingFunction: ThemeTransitionTimingFunction
  durations: ThemeDurations
  scale?: ThemeScale
  angle?: ThemeAngle
  opacity?: ThemeOpacity
  zIndex?: ThemeZIndex
  order: ThemeOrder
  animation: ThemeAnimation
  keyframes: ThemeKeyframes
}
