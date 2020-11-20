import type { Theme, ThemeConfiguration } from './types'

import * as is from './is'
import { merge } from './util'

const defaultTheme: Theme = {
  screens: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    '2xl': '1536px',
  },

  colors: {
    current: 'currentColor',
    transparent: 'transparent',
    none: 'transparent',

    surface: '#fff',
    'on-surface': '#111',

    // https://seek-oss.github.io/braid-design-system/foundations/tones/
    primary: '#0d3880',
    'on-primary': '#e8ecf4',

    secondary: '#e60278',
    'on-secondary': '#000',

    caution: '#ffc600',
    'on-caution': '#1A202C',

    critical: '#d0011b',
    'on-critical': '#f4e4e6',

    info: '#1e468c',
    'on-info': '#e8ecf2',

    neutral: '#596581',
    'on-neutral': '#eaebed',

    positive: '#138a08',
    'on-positive': '#000',

    promote: '#9556b7',
    'on-promote': '#f7f5f9',
  },

  spacing: {
    none: '0',
    0: '0',
    px: '1px',
    auto: 'auto',
    full: '100%',
    base: '.625rem',
    xs: '.25rem',
    sm: '.5rem',
    md: '.875rem',
    lg: '1rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '4rem',
    '5xl': '5rem',
    '6xl': '6rem',
  },

  sizes: {
    // The screen-* properties are added by merge
    none: '0',
    0: '0',
    px: '1px',
    auto: 'auto',
    full: '100%',
    min: 'min-content',
    max: 'max-content',
    prose: '65ch',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
  },

  fontFamily: {
    sans:
      'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif',
    mono: 'ui-monospace,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  },

  fontSize: {
    base: ['1rem', { lineHeight: '1.5rem' }],
    xs: ['.75rem', { lineHeight: '1rem' }],
    sm: ['.875rem', { lineHeight: '1.25rem' }],
    md: ['1rem', { lineHeight: '1.5rem' }],
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

  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '.025em',
    wider: '.05em',
    widest: '.1em',
  },

  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
    // 3: '0.75rem',
    // 4: '1rem',
    // 5: '1.25rem',
    // 6: '1.5rem',
    // 7: '1.75rem',
    // 8: '2rem',
    // 9: '2.25rem',
    // 10: '2.5rem',
  },

  borderWidth: {
    DEFAULT: '1px',
  },

  borderColor: {
    DEFAULT: 'currentColor',
  },

  placeholderColor: {
    DEFAULT: '#9ca3af',
  },

  flex: {
    1: '1 1 0%',
    auto: '1 1 auto',
    initial: '0 1 auto',
    none: 'none',
  },

  order: {
    first: '-9999',
    last: '9999',
    none: '0',
  },

  strokeWidth: {
    px: '1px',
    xs: '1px',
    sm: '2px',
    md: '4px',
    lg: '8px',
    xl: '16px',
    '2xl': '32px',
  },

  borderRadius: {
    DEFAULT: '.25rem',
    none: '0',
    xs: '.125rem',
    sm: '.25rem',
    md: '.375rem',
    lg: '.5rem',
    xl: '.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },

  boxShadow: {
    DEFAULT: '0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06)',
    none: 'none',
    xs: '0 0 0 1px rgba(0,0,0,0.05)',
    sm: '0 1px 2px 0 rgba(0,0,0,0.05)',
    md: '0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)',
    lg: '0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)',
    xl: '0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)',
    '2xl': '0 25px 50px -12px rgba(0,0,0,0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    outline: '0 0 0 3px rgba(66,153,225,0.5)',
  },

  transitionProperty: {
    DEFAULT: 'background-color,border-color,color,fill,stroke,opacity,box-shadow,transform',
    colors: 'background-color,border-color,color,fill,stroke',
    shadow: 'box-shadow',
  },

  transitionTimingFunction: {
    DEFAULT: 'cubic-bezier(0.4,0,0.2,1)',
    in: 'cubic-bezier(0.4,0,1,1)',
    out: 'cubic-bezier(0,0,0.2,1)',
    'in-out': 'cubic-bezier(0.4,0,0.2,1)',
  },

  durations: {
    DEFAULT: '150ms',
  },

  animation: {
    none: 'none',
    spin: ['1s linear infinite'],
    ping: ['1s cubic-bezier(0,0,0.2,1) infinite'],
    pulse: ['2s cubic-bezier(0.4,0,0.6,1) infinite'],
    bounce: ['1s infinite'],
  },

  keyframes: {
    spin: {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
    ping: {
      '0%': {
        transform: 'scale(1)',
        opacity: '1',
      },
      '75%,100%': {
        transform: 'scale(2)',
        opacity: '0',
      },
    },
    pulse: {
      '0%,100%': {
        opacity: '1',
      },
      '50%': {
        opacity: '.5',
      },
    },
    bounce: {
      '0%, 100%': {
        transform: 'translateY(-25%)',
        'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
      },
      '50%': {
        transform: 'none',
        'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
      },
    },
  },
}

export const makeTheme = (
  overrides?: ThemeConfiguration,
  activeTheme: Theme = defaultTheme,
): Theme => {
  const theme = merge(activeTheme, {})
  overrides = is.function(overrides) ? overrides(activeTheme) : overrides

  if (overrides) {
    Object.keys(overrides).forEach((section) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      theme[section as keyof Theme] = merge(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        activeTheme[section as keyof Theme] as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
        (overrides as any)[section as keyof Theme],
      )
    })
  }

  // Updated sizes: screen-xs, screen-md, ...
  Object.keys(theme.screens).forEach((key) => {
    theme.sizes[`screen-${key}`] = theme.screens[key]
  })

  theme.borderColor = merge(theme.colors, theme.borderColor)
  theme.borderWidth = merge(theme.spacing, theme.borderWidth)

  theme.divideColor = merge(theme.borderColor, theme.divideColor)
  theme.divideWidth = merge(theme.borderWidth, theme.divideWidth)

  theme.placeholderColor = merge(theme.colors, theme.placeholderColor)

  return theme
}
