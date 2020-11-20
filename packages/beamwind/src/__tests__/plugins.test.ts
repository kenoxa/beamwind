import type { Instance, Injector } from '..'

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

  expect(instance.cx('mx-auto card my-md')).toBe(
    'mx-auto max-w-md mx-auto bg-surface rounded-xl shadow-md overflow-hidden md:max-w-2xl my-md',
  )
  expect(injector.target).toMatchObject([
    '.mx-auto{margin-left:auto;margin-right:auto}',
    '.bg-surface{background-color:#fff;color:#111}',
    '.my-md{margin-bottom:.875rem;margin-top:.875rem}',
    '.overflow-hidden{overflow:hidden}',
    '.shadow-md{box-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)}',
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

  expect(instance.cx('btn')).toBe('font-bold py-2 px-4 rounded')
  expect(instance.cx('btn-primary cursor-not-allowed')).toBe(
    'bg-primary hover:bg-on-primary active:bg-primary active:underline cursor-not-allowed',
  )
  expect(instance.cx('btn cursor-not-allowed btn-primary transition')).toBe(
    'font-bold py-2 px-4 rounded cursor-not-allowed bg-primary hover:bg-on-primary active:bg-primary active:underline transition',
  )

  expect(() => instance.cx('btn-unknown-color')).toThrow(
    `Invalid token btn-unknown-color: No translation for "btn-unknown-color" found`,
  )
})
