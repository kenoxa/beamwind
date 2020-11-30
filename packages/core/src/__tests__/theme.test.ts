import type { Instance, Injector } from '../types'

import { createInstance, virtualInjector, noprefix } from '..'

import theme from '../__fixtures__/theme'

let injector: Injector<string[]>
let instance: Instance

beforeEach(() => {
  injector = virtualInjector()
  instance = createInstance({ injector, theme, prefix: noprefix, hash: false })
})

test('adjust theme using callback', () => {
  instance.setup({
    theme: (theme) => ({
      colors: {
        ...theme('colors'),
        red: theme('colors', 'critical'),
      },
    }),
  })

  expect(instance.bw('bg-primary text-red')).toBe('bg-primary text-red')
  expect(injector.target).toMatchObject([
    '.bg-primary{--bg-opacity:1;background-color:#0d3880;background-color:rgba(13,56,128,var(--bg-opacity));--text-opacity:1;color:#e8ecf4;color:rgba(232,236,244,var(--text-opacity))}',
    '.text-red{--text-opacity:1;color:#d0011b;color:rgba(208,1,27,var(--text-opacity))}',
  ])
})

test('on-* text color is added to bg-color', () => {
  instance.setup({
    theme: {
      extend: {
        colors: { 'on-primary': 'red' },
      },
    },
  })

  expect(instance.bw('bg-primary')).toBe('bg-primary')
  expect(injector.target).toMatchObject([
    '.bg-primary{--bg-opacity:1;background-color:#0d3880;background-color:rgba(13,56,128,var(--bg-opacity));--text-opacity:1;color:red}',
  ])
})
