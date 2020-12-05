import type { ThemeConfiguration, ThemeFontSize, ThemeResolver } from '@beamwind/types'

import type { Options } from './types'

import { generateColors } from '@beamwind/colors'

const ratios = (start: number, end: number): Record<string, string> => {
  const result: Record<string, string> = {}

  do {
    for (let dividend = 1; dividend < start; dividend++) {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      result[`${dividend}/${start}`] = Number((dividend / start * 100).toFixed(6)) + '%'
    }
  } while (++start <= end)

  return result
}

// Add all value not in default @beamwind/core theme
export const theme = ({ colors, shades }: Options = {}): ThemeConfiguration => (base) => ({
  extend: {
    colors: generateColors(
      {
        ...base('colors'),

        surface: '#fafafa',
        'on-surface': '#222',

        // TODO other surfaces like sheet, panel, menu

        // https://seek-oss.github.io/braid-design-system/foundations/tones/
        primary: '#0d3880',
        secondary: '#e60278',
        caution: '#ffc600',
        critical: '#d0011b',
        info: '#1e468c',
        neutral: '#596581',
        positive: '#138a08',
        promote: '#9556b7',

        ...colors,
      },
      shades,
    ),

    spacing: {
      none: '0px',
      xs: '0.125rem',
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.875rem',
      xl: '1.25rem',
      '2xl': '2rem',
      '3xl': '3rem',
      '4xl': '5rem',
    },

    durations: {
      swift: '75ms',
      fast: '100ms',
      medium: '200ms',
      moderate: '300ms',
      slow: '500ms',
      supine: '700ms',
      glacial: '1000ms',
      inert: '1500ms',
    },

    animation: {
      spin: ['1s linear infinite'],
      ping: ['1s cubic-bezier(0,0,0.2,1) infinite'],
      pulse: ['2s cubic-bezier(0.4,0,0.6,1) infinite'],
      bounce: ['1s infinite'],
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
      DEFAULT: '1px',
      none: '0px',
      xs: '1px',
      sm: '2px',
      md: '4px',
      lg: '8px',
    },

    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    },

    fontFamily: {
      sans:
        'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
      serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif',
      mono: 'ui-monospace,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    },

    fontSize: {
      md: (theme: ThemeResolver): ThemeFontSize | undefined => theme('fontSize', 'base'),
    },

    height: ratios(2, 6),
    // '1/2': '50%',
    // '1/3': '33.333333%',
    // '2/3': '66.666667%',
    // '1/4': '25%',
    // '2/4': '50%',
    // '3/4': '75%',
    // '1/5': '20%',
    // '2/5': '40%',
    // '3/5': '60%',
    // '4/5': '80%',
    // '1/6': '16.666667%',
    // '2/6': '33.333333%',
    // '3/6': '50%',
    // '4/6': '66.666667%',
    // '5/6': '83.333333%',

    inset: ratios(2, 4),
      // '1/2': '50%',
      // '1/3': '33.333333%',
      // '2/3': '66.666667%',
      // '1/4': '25%',
      // '2/4': '50%',
      // '3/4': '75%',

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

    lineHeight: {
      xs: '1rem',
      sm: '1.25rem',
      base: '1.5rem',
      md: (theme: ThemeResolver): string | undefined => theme('lineHeight', 'base'),
      lg: '1.75rem',
      xl: '1.75rem',
      '2xl': '2rem',
      '3xl': '2.25rem',
      '4xl': '2.5rem',
    },

    maxWidth: {
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
      prose: '65ch',
    },

    // TODO names for opacity
    opacity: {
      // Defaults from @beamwind/core
      // 0: '0',
      // 25: '0.25',
      // 50: '0.5',
      // 75: '0.75',
      // 100: '1',
    },

    // TODO names for order
    order: {
      // Defaults from @beamwind/core
      // first: '-9999',
      // last: '9999',
      // none: '0',
    },

    outline: {
      current: ['2px dotted currentColor', '2px'],
    },

    ringColor: {
      DEFAULT: (theme: ThemeResolver): string | undefined => theme('colors', 'primary'),
    },

    ringOffsetWidth: {
      none: '0px',
      xs: '1px',
      sm: '2px',
      md: '4px',
      lg: '8px',
    },

    ringWidth: {
      none: '0px',
      xs: '1px',
      sm: '2px',
      md: '4px',
      lg: '8px',
    },

    rotate: {
      none: '0deg',
      xs: '1deg',
      sm: '2deg',
      md: '3deg',
      lg: '6deg',
      xl: '12deg',
      '2xl': '45deg',
      // TODO better name for rotate: 45deg (turn)?
      turn: '90deg',
      reverse: '180deg',
    },

    scale: {
      // TODO better name for scale: 0 (zip)?
      zip: '0',
      '3xs': '.5',
      '2xs': '.75',
      xs: '.9',
      sm: '.95',
      none: '1',
      lg: '1.05',
      xl: '1.1',
      '2xl': '1.25',
      '3xl': '1.5',
    },

    skew: {
      none: '0deg',
      xs: '1deg',
      sm: '2deg',
      md: '3deg',
      lg: '6deg',
      xl: '12deg',
    },

    strokeWidth: {
      none: '0',
      sm: '1',
      md: '2',
    },

    transitionTimingFunction: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },

    translate: ratios(2, 4),
      // '1/2': '50%',
      // '1/3': '33.333333%',
      // '2/3': '66.666667%',
      // '1/4': '25%',
      // '2/4': '50%',
      // '3/4': '75%',

    width: {
      ...ratios(2, 6),
      // '1/2': '50%',
      // '1/3': '33.333333%',
      // '2/3': '66.666667%',
      // '1/4': '25%',
      // '2/4': '50%',
      // '3/4': '75%',
      // '1/5': '20%',
      // '2/5': '40%',
      // '3/5': '60%',
      // '4/5': '80%',
      // '1/6': '16.666667%',
      // '2/6': '33.333333%',
      // '3/6': '50%',
      // '4/6': '66.666667%',
      // '5/6': '83.333333%',

      ...ratios(12, 12),
      // '1/12': '8.333333%',
      // '2/12': '16.666667%',
      // '3/12': '25%',
      // '4/12': '33.333333%',
      // '5/12': '41.666667%',
      // '6/12': '50%',
      // '7/12': '58.333333%',
      // '8/12': '66.666667%',
      // '9/12': '75%',
      // '10/12': '83.333333%',
      // '11/12': '91.666667%',
    },

    zIndex: {
      none: '0',
      hover: '1',
      focus: '2',
      active: '3',
    },
  },
})
