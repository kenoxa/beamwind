import type { Instance, Injector, InlinePlugin } from '..'

import { createInstance, virtualInjector, noprefix, apply, optional, fail } from '..'

let injector: Injector<string[]>
let instance: Instance

beforeEach(() => {
  injector = virtualInjector()
  instance = createInstance({ injector, prefix: noprefix, hash: false })
})

test('value can be a token string', () => {
  instance.setup({
    plugins: {
      card: 'max-w-md mx-auto bg-surface rounded-xl shadow-md overflow-hidden md:max-w-2xl',
    },
  })

  expect(instance.bw('mx-auto card my-md')).toBe(
    'mx-auto max-w-md mx-auto bg-surface rounded-xl shadow-md overflow-hidden md:max-w-2xl my-md',
  )
  expect(injector.target).toMatchObject([
    '.bg-surface{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));--text-opacity:1;color:#111;color:rgba(17,17,17,var(--text-opacity))}',
    '.mx-auto{margin-left:auto;margin-right:auto}',
    '.shadow-md{--shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);box-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);box-shadow:var(--ring-offset-shadow,0 0 transparent),var(--ring-shadow,0 0 transparent),var(--shadow)}',
    '.my-md{margin-bottom:.875rem;margin-top:.875rem}',
    '.overflow-hidden{overflow:hidden}',
    '.max-w-md{max-width:28rem}',
    '.rounded-xl{border-radius:.75rem}',
    '@media (min-width: 768px){.md\\:max-w-2xl{max-width:42rem}}',
  ])
})

test('plugin can return new tokens to parse using `apply`', () => {
  instance.setup({
    warn: fail,

    plugins: {
      btn(parts, theme) {
        if (parts[1]) {
          const color = theme('colors', parts[1], optional)

          if (color) {
            return apply`bg-${parts[1]} hover:bg-on-${parts[1]} active:(bg-${parts[1]} underline)`
          }
        } else {
          return apply('font-bold py-2 px-4 rounded')
        }
      },
    },
  })

  expect(instance.bw('btn')).toBe('font-bold py-2 px-4 rounded')
  expect(instance.bw('btn-primary cursor-not-allowed')).toBe(
    'bg-primary hover:bg-on-primary active:bg-primary active:underline cursor-not-allowed',
  )
  expect(instance.bw('btn cursor-not-allowed btn-primary transition')).toBe(
    'font-bold py-2 px-4 rounded cursor-not-allowed bg-primary hover:bg-on-primary active:bg-primary active:underline transition',
  )

  expect(() => instance.bw('btn-unknown-color')).toThrow(
    `Invalid token btn-unknown-color: No plugin for "btn-unknown-color" found`,
  )
})

test('inline plugin: token string', () => {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const inlinePlugin: InlinePlugin = () => 'font-bold text-xl'

  expect(instance.bw(inlinePlugin)).toBe('font-bold text-xl')
  expect(injector.target).toMatchObject([
    '.text-xl{font-size:1.25rem;line-height:1.75rem}',
    '.font-bold{font-weight:700}',
  ])
})

test('inline plugin: css declarations', () => {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const inlinePlugin: InlinePlugin = jest.fn((theme) => ({
    'font-weight': theme('fontWeight', 'extrabold'),
    color: theme('colors', 'primary'),
  }))

  const className = instance.bw(inlinePlugin)

  expect(className).toMatch(/__\w*_\d+/)
  expect(injector.target).toMatchObject([`.${className}{font-weight:800;color:#0d3880}`])
  expect(inlinePlugin).toHaveBeenCalledTimes(1)

  // Added only once
  expect(instance.bw`${inlinePlugin}`).toBe(className)
  expect(injector.target).toMatchObject([`.${className}{font-weight:800;color:#0d3880}`])
  expect(inlinePlugin).toHaveBeenCalledTimes(2)
})
