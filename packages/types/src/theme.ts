import type { Declarations } from './common'
import type { Falsy } from './util'

export type ThemeExtend = {
  [K in keyof Theme]?: ThemeSectionRecord<ThemeSectionValueType<Theme[K]>>
}

export interface PartialTheme extends Partial<Theme> {
  extend?: ThemeExtend
}

export type ThemeConfiguration = PartialTheme | ((theme: ThemeResolver) => PartialTheme)

export interface ThemeValueResolver {
  <Section extends keyof Theme>(section: Section, key: string | string[], defaultValue?: Falsy):
    | ThemeSectionValueType<Theme[Section]>
    | undefined

  <Section extends keyof Theme>(
    section: Section,
    key: string | string[],
    defaultValue?: NonNullable<ThemeSectionValueType<Theme[Section]>>,
  ): NonNullable<ThemeSectionValueType<Theme[Section]>>
}

export interface ThemeResolver {
  <Section extends keyof Theme>(section: Section): Record<
    string,
    ThemeSectionValueType<Theme[Section]>
  >

  <Section extends keyof Theme>(section: Section, key: string):
    | ThemeSectionValueType<Theme[Section]>
    | undefined

  <Section extends keyof Theme>(
    section: Section,
    key: string,
    defaultValue: NonNullable<ThemeSectionValueType<Theme[Section]>>,
  ): NonNullable<ThemeSectionValueType<Theme[Section]>>
}

export type ThemeSectionValueType<T> = T extends ThemeSection<infer R> ? R : never

export interface ThemeSectionResolverContext {
  readonly breakpoints: (
    records: Record<string, string | undefined>,
  ) => Record<string, string | undefined>
}

export type ThemeSectionRecord<T = string> = Record<
  string,
  T | undefined | ThemeSectionRecordValueResolver<T>
>

export type ThemeSectionRecordValueResolver<T = string> = (
  theme: ThemeResolver,
  context: ThemeSectionResolverContext,
) => T | undefined

export type ThemeSectionResolver<T = string> = (
  theme: ThemeResolver,
  context: ThemeSectionResolverContext,
) => ThemeSection<T>

export type ThemeSection<T = string> = ThemeSectionRecord<T> | ThemeSectionResolver<T>

export type ThemeFontSize =
  | string
  | [size: string, lineHeight: string]
  | [size: string, options: { lineHeight?: string; letterSpacing?: string }]

export type ThemeAnimation = string | [shorthand: string] | [shorthand: string, name: string]

export type ThemeOutline = [outline: string, offset: string]

export type ThemeKeyframes = Record<string, Declarations>

export interface Theme {
  colors: ThemeSection
  spacing: ThemeSection
  durations: ThemeSection

  screens: ThemeSection

  animation: ThemeSection<ThemeAnimation>
  backgroundColor: ThemeSection
  backgroundImage: ThemeSection
  backgroundOpacity: ThemeSection
  borderColor: ThemeSection
  borderOpacity: ThemeSection
  borderRadius: ThemeSection
  borderWidth: ThemeSection
  boxShadow: ThemeSection
  divideColor: ThemeSection
  divideOpacity: ThemeSection
  divideWidth: ThemeSection
  fill: ThemeSection
  flex: ThemeSection
  fontFamily: ThemeSection
  fontSize: ThemeSection<ThemeFontSize>
  fontWeight: ThemeSection
  gap: ThemeSection
  gradientColorStops: ThemeSection
  height: ThemeSection
  inset: ThemeSection
  keyframes: ThemeSection<ThemeKeyframes>
  letterSpacing: ThemeSection
  lineHeight: ThemeSection
  margin: ThemeSection
  maxHeight: ThemeSection
  maxWidth: ThemeSection
  minHeight: ThemeSection
  minWidth: ThemeSection
  opacity: ThemeSection
  order: ThemeSection
  outline: ThemeSection<ThemeOutline>
  padding: ThemeSection
  placeholderColor: ThemeSection
  placeholderOpacity: ThemeSection
  ringColor: ThemeSection
  ringOffsetColor: ThemeSection
  ringOffsetWidth: ThemeSection
  ringOpacity: ThemeSection
  ringWidth: ThemeSection
  rotate: ThemeSection
  scale: ThemeSection
  skew: ThemeSection
  space: ThemeSection
  stroke: ThemeSection
  strokeWidth: ThemeSection
  textColor: ThemeSection
  textOpacity: ThemeSection
  transitionDelay: ThemeSection
  transitionDuration: ThemeSection
  transitionProperty: ThemeSection
  transitionTimingFunction: ThemeSection
  translate: ThemeSection
  width: ThemeSection
  zIndex: ThemeSection
}
