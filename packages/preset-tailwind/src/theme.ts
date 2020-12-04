// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

import type { PartialTheme, ThemeResolver } from '@beamwind/types'

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

// 0: '0px',
// 2: '2px',
// 4: '4px',
// 8: '8px',
const exponential = (stop: number, unit: string, start = 0): Record<string, string> => {
  const result: Record<string, string> = {}

  for(;start <= stop; start = (start * 2) || 1) {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    result[start] = start + unit
  }

  return result
}

// 3: '.75rem',
// 4: '1rem',
// 5: '1.25rem',
// 6: '1.5rem',
// 7: '1.75rem',
// 8: '2rem',
// 9: '2.25rem',
// 10: '2.5rem',
const linear = (stop: number, unit = '', divideBy = 1, start = 0, step = 1): Record<string, string> => {
  const result: Record<string, string> = {}

  for(;start <= stop; start += step) {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    result[start] = (start / divideBy) + unit
  }

  return result
}

// Add all value not in default @beamwind/core theme
export const theme: PartialTheme = {
  extend: {
    // https://github.com/tailwindlabs/tailwindcss/blob/master/colors.js
    colors: {
      black: '#000',
      white: '#fff',

      'gray-50': '#f9fafb',
      'gray-100': '#f3f4f6',
      'gray-200': '#e5e7eb',
      'gray-300': '#d1d5db',
      'gray-400': '#9ca3af',
      'gray-500': '#6b7280',
      'gray-600': '#4b5563',
      'gray-700': '#374151',
      'gray-800': '#1f2937',
      'gray-900': '#111827',

      'red-50': '#fef2f2',
      'red-100': '#fee2e2',
      'red-200': '#fecaca',
      'red-300': '#fca5a5',
      'red-400': '#f87171',
      'red-500': '#ef4444',
      'red-600': '#dc2626',
      'red-700': '#b91c1c',
      'red-800': '#991b1b',
      'red-900': '#7f1d1d',

      'yellow-50': '#fffbeb',
      'yellow-100': '#fef3c7',
      'yellow-200': '#fde68a',
      'yellow-300': '#fcd34d',
      'yellow-400': '#fbbf24',
      'yellow-500': '#f59e0b',
      'yellow-600': '#d97706',
      'yellow-700': '#b45309',
      'yellow-800': '#92400e',
      'yellow-900': '#78350f',

      'green-50': '#ecfdf5',
      'green-100': '#d1fae5',
      'green-200': '#a7f3d0',
      'green-300': '#6ee7b7',
      'green-400': '#34d399',
      'green-500': '#10b981',
      'green-600': '#059669',
      'green-700': '#047857',
      'green-800': '#065f46',
      'green-900': '#064e3b',

      'blue-50': '#eff6ff',
      'blue-100': '#dbeafe',
      'blue-200': '#bfdbfe',
      'blue-300': '#93c5fd',
      'blue-400': '#60a5fa',
      'blue-500': '#3b82f6',
      'blue-600': '#2563eb',
      'blue-700': '#1d4ed8',
      'blue-800': '#1e40af',
      'blue-900': '#1e3a8a',

      'indigo-50': '#eef2ff',
      'indigo-100': '#e0e7ff',
      'indigo-200': '#c7d2fe',
      'indigo-300': '#a5b4fc',
      'indigo-400': '#818cf8',
      'indigo-500': '#6366f1',
      'indigo-600': '#4f46e5',
      'indigo-700': '#4338ca',
      'indigo-800': '#3730a3',
      'indigo-900': '#312e81',

      'purple-50': '#f5f3ff',
      'purple-100': '#ede9fe',
      'purple-200': '#ddd6fe',
      'purple-300': '#c4b5fd',
      'purple-400': '#a78bfa',
      'purple-500': '#8b5cf6',
      'purple-600': '#7c3aed',
      'purple-700': '#6d28d9',
      'purple-800': '#5b21b6',
      'purple-900': '#4c1d95',

      'pink-50': '#fdf2f8',
      'pink-100': '#fce7f3',
      'pink-200': '#fbcfe8',
      'pink-300': '#f9a8d4',
      'pink-400': '#f472b6',
      'pink-500': '#ec4899',
      'pink-600': '#db2777',
      'pink-700': '#be185d',
      'pink-800': '#9d174d',
      'pink-900': '#831843',
    },

    spacing: {
      ...linear(4, 'rem', 4, 0.5, 0.5),
      // 0.5: '0.125rem',
      // 1: '0.25rem',
      // 1.5: '0.375rem',
      // 2: '0.5rem',
      // 2.5: '0.625rem',
      // 3: '0.75rem',
      // 3.5: '0.875rem',
      // 4: '1rem',
      ...linear(12, 'rem', 4, 5),
      // 5: '1.25rem',
      // 6: '1.5rem',
      // 7: '1.75rem',
      // 8: '2rem',
      // 9: '2.25rem',
      // 10: '2.5rem',
      // 11: '2.75rem',
      // 12: '3rem',
      14: '3.5rem',
      ...linear(64, 'rem', 4, 16, 4),
      // 16: '4rem',
      // 20: '5rem',
      // 24: '6rem',
      // 28: '7rem',
      // 32: '8rem',
      // 36: '9rem',
      // 40: '10rem',
      // 44: '11rem',
      // 48: '12rem',
      // 52: '13rem',
      // 56: '14rem',
      // 60: '15rem',
      // 64: '16rem',
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

    animation: {
      spin: ['1s linear infinite'],
      ping: ['1s cubic-bezier(0,0,0.2,1) infinite'],
      pulse: ['2s cubic-bezier(0.4,0,0.6,1) infinite'],
      bounce: ['1s infinite'],
    },

    borderColor: {
      DEFAULT: (theme: ThemeResolver): string => theme('colors', 'gray-200', 'currentColor'),
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
      ...exponential(8, 'px')
      // 0: '0px',
      // 2: '2px',
      // 4: '4px',
      // 8: '8px',
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

    lineHeight: linear(10, 'rem', 4, 3),
      // 3: '.75rem',
      // 4: '1rem',
      // 5: '1.25rem',
      // 6: '1.5rem',
      // 7: '1.75rem',
      // 8: '2rem',
      // 9: '2.25rem',
      // 10: '2.5rem',

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

    opacity: {
      5: '0.05',
      ...linear(90, '', 100, 10, 10),
      // 10: '0.1',
      // 20: '0.2',
      // 30: '0.3',
      // 40: '0.4',
      // 60: '0.6',
      // 70: '0.7',
      // 80: '0.8',
      // 90: '0.9',
      95: '0.95',
    },

    order: linear(12, '', 1, 1),
    // 1: '1',
    // 2: '2',
    // 3: '3',
    // 4: '4',
    // 5: '5',
    // 6: '6',
    // 7: '7',
    // 8: '8',
    // 9: '9',
    // 10: '10',
    // 11: '11',
    // 12: '12',

    outline: {
      white: ['2px dotted white', '2px'],
      black: ['2px dotted black', '2px'],
    },

    ringColor: {
      DEFAULT: (theme: ThemeResolver): string => theme('colors', 'blue-500', '#3b82f6'),
    },

    ringOffsetWidth: exponential(8, 'px'),
      // 0: '0px',
      // 1: '1px',
      // 2: '2px',
      // 4: '4px',
      // 8: '8px',

    ringWidth: exponential(8, 'px'),
      // 0: '0px',
      // 1: '1px',
      // 2: '2px',
      // 4: '4px',
      // 8: '8px',

    rotate: {
      ...exponential(2, 'deg'),
      // 0: '0deg',
      // 1: '1deg',
      // 2: '2deg',
      ...exponential(12, 'deg', 3),
      // 3: '3deg',
      // 6: '6deg',
      // 12: '12deg',
      ...exponential(180, 'deg', 45),
      // 45: '45deg',
      // 90: '90deg',
      // 180: '180deg',
    },

    scale: {
      0: '0',
      50: '.5',
      75: '.75',
      ...linear(110, '', 100, 90, 5),
      // 90: '.9',
      // 95: '.95',
      // 100: '1',
      // 105: '1.05',
      // 110: '1.1',
      125: '1.25',
      150: '1.5',
    },

    skew: {
      ...exponential(2, 'deg'),
      // 0: '0deg',
      // 1: '1deg',
      // 2: '2deg',
      ...exponential(12, 'deg', 3),
      // 3: '3deg',
      // 6: '6deg',
      // 12: '12deg',
    },

    strokeWidth: linear(2),
      // 0: '0',
      // 1: '1',
      // 2: '2',

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

    zIndex: linear(50, '', 1, 0, 10),
      // 0: '0',
      // 10: '10',
      // 20: '20',
      // 30: '30',
      // 40: '40',
      // 50: '50',
  },
}
