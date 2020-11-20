import type { Instance, Injector } from '..'

import { createInstance, virtualInjector, noprefix } from '..'

let injector: Injector<string[]>
let instance: Instance

beforeEach(() => {
  injector = virtualInjector()
  instance = createInstance({ injector, prefix: noprefix })
})

test('class names are hashed', () => {
  expect(instance.cx('group flex pt-4 text-center')).toBe('_1bk5mm5 _1l0yvu6 _xqpuic _1gpf024')
  expect(injector.target).toMatchObject([
    '._1l0yvu6{display:flex}',
    '._xqpuic{padding-top:1rem}',
    '._1gpf024{text-align:center}',
  ])
})

test('keyframes are hashed', () => {
  expect(instance.cx('animate-pulse')).toBe('_wlxg8c')
  expect(injector.target).toMatchObject([
    '._wlxg8c{animation:_1gyyyrk 2s cubic-bezier(0.4,0,0.6,1) infinite}',
    '@keyframes _1gyyyrk{0%,100%{opacity:1}50%{opacity:.5}}',
  ])
})

test('same declarations are inserted only once', () => {
  expect(instance.cx('border-x border-lr')).toBe('_1k8rogr _1k8rogr')
  expect(injector.target).toMatchObject([
    '._1k8rogr{border-left:1px solid currentColor;border-right:1px solid currentColor}',
  ])
})

test('same color is inserted only once', () => {
  expect(instance.cx('text-primary text-#0d3880')).toBe('_1jca9tr _1jca9tr')
  expect(injector.target).toMatchObject(['._1jca9tr{color:#0d3880}'])
})

test('suffix is considered for hash', () => {
  expect(instance.cx('border-l divide-x')).toBe('_1ldho2c _1s0kdql')
  expect(injector.target).toMatchObject([
    '._1ldho2c{border-left:1px solid currentColor}',
    '._1s0kdql>:not([hidden])~:not([hidden]){border-left:1px solid currentColor}',
  ])
})
