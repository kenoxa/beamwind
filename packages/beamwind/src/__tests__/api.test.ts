import type { Instance, Injector, Declarations } from '..'

import { createInstance, virtualInjector, noprefix, fail } from '..'

import { escape } from '../css'

import data from './api.json'

const stringify = (className: string, declarations: Record<string, string | undefined>): string => {
  return (
    className +
    '{' +
    Object.entries(declarations)
      .filter(([_property, value]) => value != null)
      .map(([property, value]) => `${property}:${value as string}`)
      .join(';') +
    '}'
  )
}

let injector: Injector<string[]>
let cx: Instance['cx']
let setup: Instance['setup']

beforeEach(() => {
  injector = virtualInjector()
  const instance = createInstance({ injector, prefix: noprefix, hash: false })
  cx = instance.cx
  setup = instance.setup
})

test.each(
  // "skew-y-3": { "transform": "skewY(3deg)" },
  // "space-x": [">:not([hidden])~:not([hidden])", { "margin-left": ".625rem" }],
  // "group hover:bg-surface": [
  //   "group hover:bg-surface",
  //   [".hover\\:bg-surface:hover{background-color:#fff;color:#111}"]
  // ],
  Object.entries(data).map(([tokens, declarations]): [string, string, string[]] => {
    if (Array.isArray(declarations)) {
      if (Array.isArray(declarations[1])) {
        // "group hover:bg-surface": [
        //   "group hover:bg-surface",
        //   [".hover\\:bg-surface:hover{background-color:#fff;color:#111}"]
        // ],
        return [tokens, declarations[0] as string, declarations[1]]
      }

      // "space-x": [">:not([hidden])~:not([hidden])", { "margin-left": ".625rem" }],
      return [
        tokens,
        tokens,
        [
          stringify(
            `.${escape(tokens)}${declarations[0] as string}`,
            declarations[1] as Declarations,
          ),
        ],
      ]
    }

    // "skew-y-3": { "transform": "skewY(3deg)" },
    return [
      tokens,
      tokens,
      [stringify('.' + escape(tokens), declarations as Record<string, string | undefined>)],
    ]
  }),
)('cx(%j) => %s', (tokens, classNames, rules) => {
  expect(cx(tokens)).toBe(classNames)
  expect(injector.target).toMatchObject(rules)

  // Cached access
  expect(cx(tokens)).toBe(classNames)
  expect(injector.target).toMatchObject(rules)
})

test.each([
  [
    ['bg-primary', false && 'rounded'],
    'bg-primary',
    ['.bg-primary{background-color:#0d3880;color:#e8ecf4}'],
  ],
  [
    ['bg-primary', true && 'rounded'],
    'bg-primary rounded',
    ['.bg-primary{background-color:#0d3880;color:#e8ecf4}', '.rounded{border-radius:.25rem}'],
  ],
  [
    ['bg-primary', true, false, '', 'text-caution', null, undefined, 0, Number.NaN],
    'bg-primary text-caution',
    ['.bg-primary{background-color:#0d3880;color:#e8ecf4}', '.text-caution{color:#ffc600}'],
  ],
  [
    { 'bg-primary': true, rounded: false },
    'bg-primary',
    ['.bg-primary{background-color:#0d3880;color:#e8ecf4}'],
  ],
  [
    { 'bg-primary': true, rounded: true },
    'bg-primary rounded',
    ['.bg-primary{background-color:#0d3880;color:#e8ecf4}', '.rounded{border-radius:.25rem}'],
  ],
  [
    {
      sm: ['hover:rounded', 'active:rounded-full'],
      md: { rounded: true, hover: 'bg-primary' },
      lg: {
        'rounded-full': true,
        hover: 'bg-primary text-critical active:(underline shadow)',
      },
    },
    'sm:hover:rounded sm:active:rounded-full md:rounded md:hover:bg-primary lg:rounded-full lg:hover:bg-primary lg:hover:text-critical lg:hover:active:underline lg:hover:active:shadow',
    [
      '@media (min-width: 576px){.sm\\:hover\\:rounded:hover{border-radius:.25rem}}',
      '@media (min-width: 576px){.sm\\:active\\:rounded-full:active{border-radius:9999px}}',
      '@media (min-width: 768px){.md\\:rounded{border-radius:.25rem}}',
      '@media (min-width: 768px){.md\\:hover\\:bg-primary:hover{background-color:#0d3880;color:#e8ecf4}}',
      '@media (min-width: 992px){.lg\\:rounded-full{border-radius:9999px}}',
      '@media (min-width: 992px){.lg\\:hover\\:bg-primary:hover{background-color:#0d3880;color:#e8ecf4}}',
      '@media (min-width: 992px){.lg\\:hover\\:text-critical:hover{color:#d0011b}}',
      '@media (min-width: 992px){.lg\\:hover\\:active\\:shadow:hover:active{box-shadow:0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06)}}',
      '@media (min-width: 992px){.lg\\:hover\\:active\\:underline:hover:active{text-decoration:underline}}',
    ],
  ],
])('cx(%j) => %s', (tokens, classNames, rules) => {
  expect(cx(tokens)).toBe(classNames)
  expect(injector.target).toMatchObject(rules)

  // Cached access
  expect(cx(tokens)).toBe(classNames)
  expect(injector.target).toMatchObject(rules)
})

/* eslint-disable no-template-curly-in-string */
test('cx`bg-primary ${false && "rounded"}`', () => {
  expect(cx`bg-primary ${false && 'rounded'}`).toBe('bg-primary')
  expect(injector.target).toMatchObject(['.bg-primary{background-color:#0d3880;color:#e8ecf4}'])
})

test('cx`bg-primary ${true && "rounded"}`', () => {
  expect(cx`bg-primary ${true && 'rounded'}`).toBe('bg-primary rounded')
  expect(injector.target).toMatchObject([
    '.bg-primary{background-color:#0d3880;color:#e8ecf4}',
    '.rounded{border-radius:.25rem}',
  ])
})

test('cx`bg-primary ${{rounded: true}}`', () => {
  expect(cx`bg-primary ${{ rounded: true }}`).toBe('bg-primary rounded')
  expect(injector.target).toMatchObject([
    '.bg-primary{background-color:#0d3880;color:#e8ecf4}',
    '.rounded{border-radius:.25rem}',
  ])
})

test('cx`bg-primary ${{rounded: false}}`', () => {
  expect(cx`bg-primary ${{ rounded: false }}`).toBe('bg-primary')
  expect(injector.target).toMatchObject(['.bg-primary{background-color:#0d3880;color:#e8ecf4}'])
})

test('cx`bg-${"secondary"} rounded-${"xl"}`', () => {
  expect(cx`bg-${'secondary'} rounded-${'xl'}`).toBe('bg-secondary rounded-xl')
  expect(injector.target).toMatchObject([
    '.bg-secondary{background-color:#e60278;color:#000}',
    '.rounded-xl{border-radius:.75rem}',
  ])
})
/* eslint-enable no-template-curly-in-string */

test('falsy arguments', () => {
  expect(cx(true, false, '', null, undefined, 0, Number.NaN)).toBe('')
  expect(cx('')).toBe('')
})

test('empty arguments', () => {
  expect(cx('')).toBe('')
  expect(cx([])).toBe('')
  expect(cx({})).toBe('')
})

test('no arguments', () => {
  expect(cx()).toBe('')
})

test('fail for invalid animation', () => {
  expect(() => cx`animate-unknown`).toThrow(`No theme value found for "animation.unknown"`)
})

test('warn to console', () => {
  const consoleWarn = console.warn

  try {
    console.warn = jest.fn()

    expect(cx('text-white unknown-directive bg-black')).toBe('text-white bg-black')

    expect(console.warn).toHaveBeenCalledWith(
      `Invalid token unknown-directive: No translation for "unknown-directive" found`,
    )
  } finally {
    console.warn = consoleWarn
  }
})

test('use fail for warn', () => {
  setup({ warn: fail })

  expect(() => cx('unknown-directive')).toThrow(
    `Invalid token unknown-directive: No translation for "unknown-directive" found`,
  )
})

test('changing injector before first use', () => {
  const newInjector = virtualInjector()
  setup({ injector: newInjector })

  expect(cx('text-center')).toBe('text-center')
  expect(newInjector.target).toMatchObject(['.text-center{text-align:center}'])
  expect(injector.target).toHaveLength(0)
})

test('changing injector after first use', () => {
  expect(cx('text-center')).toBe('text-center')

  // Can not change injector after first use
  expect(() => {
    setup({ injector: virtualInjector() })
  }).toThrow('Changing the injector after first use is not supported')
})
