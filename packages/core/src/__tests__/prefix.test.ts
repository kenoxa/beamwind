import type { Instance, Injector } from '../types'

import { createInstance, virtualInjector } from '..'

let injector: Injector<string[]>
let instance: Instance

beforeEach(() => {
  injector = virtualInjector()
  instance = createInstance({ injector, hash: false })

  instance.setup({
    plugins: {
      'scroll-snap': (parts) => {
        return { 'scroll-snap-type': parts[1] }
      },
    },
  })
})

test('add prefix', () => {
  expect(instance.bw('sticky scroll-snap-x appearance-menulist-button')).toBe(
    'sticky scroll-snap-x appearance-menulist-button',
  )
  expect(injector.target).toMatchObject([
    '.appearance-menulist-button{appearance:menulist-button;-moz-appearance:menulist-button;-webkit-appearance:menulist-button}',
    '.sticky{position:-webkit-sticky, sticky}',
    '.scroll-snap-x{scroll-snap-type:x;-ms-scroll-snap-type:x;-webkit-scroll-snap-type:x}',
  ])
})
