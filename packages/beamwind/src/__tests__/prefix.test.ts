import type { Instance, Injector } from '..'

import { createInstance, virtualInjector } from '..'

let injector: Injector<string[]>
let instance: Instance

beforeEach(() => {
  injector = virtualInjector()
  instance = createInstance({ injector, hash: false })
})

test('add prefix', () => {
  expect(instance.cx('sticky appearance-menulist-button')).toBe('sticky appearance-menulist-button')
  expect(injector.target).toMatchObject([
    '.appearance-menulist-button{appearance:menulist-button;-moz-appearance:menulist-button;-webkit-appearance:menulist-button}',
    '.sticky{position:-webkit-sticky, sticky}',
  ])
})
