import type { PartialTheme, ThemeFontSize, ThemeResolver } from '../types'

const theme: PartialTheme = {
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  extend: {
    colors: {
      black: '#000',
      white: '#fff',

      purple: 'purple',
      fuchsia: 'fuchsia',
      aqua: 'aqua',

      '#111': '#111',
      '#222': '#222',
      '#333': '#333',
      '#3b82f6': '#3b82f6',

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
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },

    durations: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },

    fontSize: {
      md: (theme: ThemeResolver): ThemeFontSize | undefined => theme('fontSize', 'base'),
    },

    borderRadius: {
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
    },

    borderWidth: {
      none: '0',
      0: '0px',
      2: '2px',
      4: '4px',
      xs: '.25rem',
      sm: '.5rem',
      md: '.875rem',
      lg: '1rem',
      xl: '1.25rem',
    },

    boxShadow: {
      xs: '0 0 0 1px rgba(0,0,0,0.05)',
      sm: '0 1px 2px 0 rgba(0,0,0,0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06)',
      md: '0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)',
      lg: '0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)',
      xl: '0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)',
      '2xl': '0 25px 50px -12px rgba(0,0,0,0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    },

    opacity: {
      0: '0',
      5: '0.05',
      10: '0.1',
      20: '0.2',
      25: '0.25',
      30: '0.3',
      35: '0.35',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      70: '0.7',
      75: '0.75',
      80: '0.8',
      85: '0.85',
      90: '0.9',
      95: '0.95',
      100: '1',
    },
    rotate: {
      DEFAULT: '180deg',
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      5: '5deg',
      6: '6deg',
      12: '12deg',
      30: '30deg',
      45: '45deg',
      90: '90deg',
      180: '180deg',
      '0.25turn': '0.25turn',
    },
    scale: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
    },
    skew: {
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
    },

    lineHeight: {
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
    },

    maxWidth: {
      screen: '100vw',
      none: 'none',
      0: '0rem',
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
      '7xl': '80rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      prose: '65ch',
    },

    translate: {
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
    },

    strokeWidth: {
      0: '0',
      1: '1',
      2: '2',
      px: '1px',
      xs: '1px',
      sm: '2px',
      md: '4px',
      lg: '8px',
      xl: '16px',
      '2xl': '32px',
    },

    fill: {
      caution: (theme: ThemeResolver): string | undefined => theme('colors', 'caution'),
    },

    gap: {
      none: '0',
      base: '.625rem',
    },

    width: {
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '3/7': '42.857142%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
    },

    ringWidth: {
      sm: '.5rem',
      0: '0',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    ringOffsetWidth: {
      sm: '.5rem',
      0: '0',
      2: '2px',
      4: '4px',
      8: '8px',
    },

    order: {
      1: '1',
      2: '2',
      3: '3',
      10: '10',
    },
    zIndex: {
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
    },

    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.4,0,0.2,1)',
      linear: 'linear',
      in: 'cubic-bezier(0.4,0,1,1)',
      out: 'cubic-bezier(0,0,0.2,1)',
      'in-out': 'cubic-bezier(0.4,0,0.2,1)',
    },

    animation: {
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

    outline: {
      white: ['2px dotted white', '2px'],
      black: ['2px dotted black', '2px'],
    },
  },
}

export default theme
