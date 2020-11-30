import type {
  Theme,
  PartialTheme,
  ThemeConfiguration,
  ThemeResolver,
  ThemeSectionResolverContext,
  ThemeExtend,
} from './types'

import * as is from './is'

import { createCache, merge } from './util'

const resolveContext: ThemeSectionResolverContext = {
  breakpoints: (source: Record<string, string | undefined>): Record<string, string | undefined> =>
    // eslint-disable-next-line unicorn/no-reduce
    Object.keys(source).reduce((target, key) => {
      target['screen-' + key] = source[key]

      return target
    }, {} as Record<string, string | undefined>),
}

interface ExtendableThemeResolver extends ThemeResolver {
  extend: (overrides?: ThemeConfiguration) => ExtendableThemeResolver
}

const createThemeResolver = (source: Theme, extend: ThemeExtend): ExtendableThemeResolver => {
  const cache = createCache<Record<string, unknown>>()

  const resolveSection = (
    object: Partial<Theme>,
    section: keyof Theme,
  ): Record<string, unknown> | undefined => {
    const base = object[section]

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return (is.function(base) ? base(resolver, resolveContext) : base) as Record<string, unknown>
  }

  const resolver = ((section: keyof Theme, key?: string, defaultValue?: unknown) => {
    let base = cache.get(section)

    if (!base) {
      base = merge(resolveSection(source, section), resolveSection(extend, section)) as Record<
        string,
        unknown
      >
      cache.set(section, base)
    }

    if (key) {
      let value = base[key]

      if (is.function(value)) {
        value = value(resolver, resolveContext)
      }

      return value == null ? defaultValue : value
    }

    return base
  }) as ExtendableThemeResolver

  resolver.extend = (overrides?: ThemeConfiguration) => {
    overrides = is.function(overrides) ? overrides(resolver) : overrides

    return createThemeResolver(
      merge(source, overrides),
      overrides && overrides.extend
        ? // eslint-disable-next-line unicorn/no-reduce
          Object.keys(overrides.extend).reduce((extend, section) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            extend[section as keyof ThemeExtend] = merge(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              extend[section as keyof ThemeExtend] as any,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
              ((overrides as PartialTheme).extend as any)[section as keyof ThemeExtend],
            )

            return extend
          }, merge<ThemeExtend, ThemeExtend>({}, extend))
        : extend,
    )
  }

  return resolver
}

// See
// - https://tailwindcss.com/docs/theme
// - https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
export const theme = createThemeResolver(
  {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
    },
    durations: {},
    spacing: {
      px: '1px',
      0: '0px',
    },

    animation: {
      none: 'none',
    },

    backgroundColor: (theme) => theme('colors'),
    backgroundImage: {
      none: 'none',
    },
    backgroundOpacity: (theme) => theme('opacity'),
    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: 'currentColor',
    }),
    borderOpacity: (theme) => theme('opacity'),
    borderRadius: {
      none: '0px',
      DEFAULT: '0.25rem',
      full: '9999px',
    },
    borderWidth: {
      DEFAULT: '1px',
    },
    boxShadow: {
      none: '0 0 transparent',
    },
    divideColor: (theme) => theme('borderColor'),
    divideOpacity: (theme) => theme('borderOpacity'),
    divideWidth: (theme) => theme('borderWidth'),
    fill: { current: 'currentColor' },
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    fontFamily: {
      sans: 'ui-sans-serif,system-ui,sans-serif',
      serif: 'ui-serif,serif',
      mono: 'ui-monospace,monospace',
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    gap: (theme) => theme('spacing'),
    gradientColorStops: (theme) => theme('colors'),
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    inset: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
    }),
    keyframes: {},
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    margin: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
    }),
    maxHeight: (theme) => ({
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      0: '0rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      ...breakpoints(theme('screens')),
    }),
    minHeight: {
      0: '0px',
      full: '100%',
      screen: '100vh',
    },
    minWidth: {
      0: '0px',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
    },
    opacity: {
      0: '0',
      25: '0.25',
      50: '0.5',
      75: '0.75',
      100: '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
    },
    outline: {
      none: ['2px solid transparent', '2px'],
    },
    padding: (theme) => theme('spacing'),
    placeholderColor: (theme) => theme('colors'),
    placeholderOpacity: (theme) => theme('opacity'),
    ringColor: (theme) => ({
      DEFAULT: '#3b82f6',
      ...theme('colors'),
    }),
    ringOffsetColor: (theme) => theme('colors'),
    ringOffsetWidth: {},
    ringOpacity: (theme) => ({
      DEFAULT: '0.5',
      ...theme('opacity'),
    }),
    ringWidth: {
      DEFAULT: '3px',
    },
    rotate: {},
    scale: {},
    skew: {},
    space: (theme) => theme('spacing'),
    // TODO @beamwind/play use colors
    stroke: {
      current: 'currentColor',
    },
    strokeWidth: {},
    textColor: (theme) => theme('colors'),
    textOpacity: (theme) => theme('opacity'),
    transitionDuration: (theme) => ({
      DEFAULT: '150ms',
      ...theme('durations'),
    }),
    transitionDelay: (theme) => theme('durations'),
    transitionProperty: {
      none: 'none',
      all: 'all',
      DEFAULT: 'background-color,border-color,color,fill,stroke,opacity,box-shadow,transform',
      colors: 'background-color,border-color,color,fill,stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.4,0,0.2,1)',
    },
    translate: (theme) => ({
      ...theme('spacing'),
      full: '100%',
    }),
    width: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vw',
      min: 'min-content',
      max: 'max-content',
    }),
    zIndex: {
      auto: 'auto',
    },
  },
  {},
)
