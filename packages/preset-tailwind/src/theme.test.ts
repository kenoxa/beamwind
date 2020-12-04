import { theme } from './theme'

test('theme values', () => {
  expect(theme.extend?.spacing).toStrictEqual({
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
  })

  expect(theme.extend?.height).toStrictEqual({
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
  })

  expect(theme.extend?.borderWidth).toStrictEqual({
    DEFAULT: '1px',
    0: '0px',
    1: '1px',
    2: '2px',
    4: '4px',
    8: '8px',
  })

  expect(theme.extend?.ringOffsetWidth).toStrictEqual({
    0: '0px',
    1: '1px',
    2: '2px',
    4: '4px',
    8: '8px',
  })

  expect(theme.extend?.rotate).toStrictEqual({
    0: '0deg',
    1: '1deg',
    2: '2deg',
    3: '3deg',
    6: '6deg',
    12: '12deg',
    45: '45deg',
    90: '90deg',
    180: '180deg',
  })

  expect(theme.extend?.skew).toStrictEqual({
    0: '0deg',
    1: '1deg',
    2: '2deg',
    3: '3deg',
    6: '6deg',
    12: '12deg',
  })

  expect(theme.extend?.lineHeight).toStrictEqual({
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
  })

  expect(theme.extend?.opacity).toStrictEqual({
    5: '0.05',
    10: '0.1',
    20: '0.2',
    30: '0.3',
    40: '0.4',
    50: '0.5',
    60: '0.6',
    70: '0.7',
    80: '0.8',
    90: '0.9',
    95: '0.95',
  })

  expect(theme.extend?.order).toStrictEqual({
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: '11',
    12: '12',
  })

  expect(theme.extend?.strokeWidth).toStrictEqual({
    0: '0',
    1: '1',
    2: '2',
  })

  expect(theme.extend?.zIndex).toStrictEqual({
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
  })

  expect(theme.extend?.scale).toStrictEqual({
    0: '0',
    50: '.5',
    75: '.75',
    90: '0.9',
    95: '0.95',
    100: '1',
    105: '1.05',
    110: '1.1',
    125: '1.25',
    150: '1.5',
  })

  expect(theme.extend?.durations).toStrictEqual({
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms',
  })
})
