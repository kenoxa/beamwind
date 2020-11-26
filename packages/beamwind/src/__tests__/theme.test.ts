import type { Instance, Injector } from '..'

import { createInstance, virtualInjector, noprefix } from '..'

let injector: Injector<string[]>
let instance: Instance

beforeEach(() => {
  injector = virtualInjector()
  instance = createInstance({ injector, prefix: noprefix, hash: false })
})

test('adjust theme using callback', () => {
  instance.setup({ theme: (theme) => ({ colors: { red: theme.colors.critical } }) })

  expect(instance.bw('bg-primary text-red')).toBe('bg-primary text-red')
  expect(injector.target).toMatchObject([
    '.bg-primary{background-color:#0d3880;color:#e8ecf4}',
    '.text-red{color:#d0011b}',
  ])
})

test('on-* text color is added to bg-color', () => {
  instance.setup({ theme: { colors: { 'on-primary': 'red' } } })

  expect(instance.bw('bg-primary')).toBe('bg-primary')
  expect(injector.target).toMatchObject(['.bg-primary{background-color:#0d3880;color:red}'])
})
