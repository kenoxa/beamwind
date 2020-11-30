import type { Instance, Injector } from '../types'

import theme from '../__fixtures__/theme'

let injector: Injector<string[]>
let instance: Instance

beforeEach(async () => {
  await import('../__fixtures__/ie11-reset.mjs')

  const { createInstance, virtualInjector, noprefix } = await import('..')

  injector = virtualInjector()
  instance = createInstance({ injector, theme, prefix: noprefix })
})

test('class names are hashed', () => {
  expect(instance.bw('group flex pt-4 text-center')).toBe('_1bk5mm5 _1l0yvu6 _xqpuic _1gpf024')
  expect(injector.target).toMatchObject([
    '._1l0yvu6{display:flex}',
    '._xqpuic{padding-top:1rem}',
    '._1gpf024{text-align:center}',
  ])
})
