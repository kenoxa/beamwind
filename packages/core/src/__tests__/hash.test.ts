import type { Instance, Injector } from '../types'

import { createInstance, virtualInjector, noprefix } from '..'

import theme from '../__fixtures__/theme'

let injector: Injector<string[]>
let instance: Instance

beforeEach(() => {
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

test('keyframes are hashed', () => {
  expect(instance.bw('animate-pulse')).toBe('_wlxg8c')
  expect(injector.target).toMatchObject([
    '._wlxg8c{animation:_1gyyyrk 2s cubic-bezier(0.4,0,0.6,1) infinite}',
    '@keyframes _1gyyyrk{0%,100%{opacity:1}50%{opacity:.5}}',
  ])
})

test('same declarations are inserted only once', () => {
  expect(instance.bw('border-x border-lr')).toBe('_5mfhy3 _5mfhy3')
  expect(injector.target).toMatchObject(['._5mfhy3{border-left-width:1px;border-right-width:1px}'])
})

test('same color is inserted only once', () => {
  instance.setup({
    theme: {
      extend: {
        colors: {
          '#0d3880': (theme) => theme('colors', 'primary'),
        },
      },
    },
  })

  expect(instance.bw('text-primary text-#0d3880')).toBe('_w64b8 _w64b8')
  expect(injector.target).toMatchObject([
    '._w64b8{--_9esraz:1;color:#0d3880;color:rgba(13,56,128,var(--_9esraz))}',
  ])
})

test('suffix is considered for hash', () => {
  expect(instance.bw('border-l divide-x')).toBe('_gg8x1m _9d49do')
  expect(injector.target).toMatchObject([
    '._gg8x1m{border-left-width:1px}',
    '._9d49do>:not([hidden])~:not([hidden]){border-left-width:1px}',
  ])
})

test('transform', () => {
  expect(instance.bw('transform')).toBe('_qlfj4a')
  expect(injector.target).toMatchObject([
    '._qlfj4a{transform:translateX(var(--_1b5bwxb,0)) translateY(var(--_5lpe1e,0)) rotate(var(--_1tjx9ji,0)) skewX(var(--_18a3cx6,0)) skewY(var(--_8gr6l0,0)) scaleX(var(--_1nk5hxs,1)) scaleY(var(--_164xbw6,1))}',
  ])
})

test('scale', () => {
  expect(instance.bw('scale-90')).toBe('_par911')
  expect(injector.target).toMatchObject([
    '._par911{--_1nk5hxs:.9;--_164xbw6:.9;transform:scale(.9)}',
  ])
})

test('bg-gradient-to-r', () => {
  expect(instance.bw('bg-gradient-to-r')).toBe('_1gt8na1')
  expect(injector.target).toMatchObject([
    '._1gt8na1{background-image:linear-gradient(to right,var(--_1j5yf11,var(--_1iasyn4,transparent),var(--_3cvhiv,transparent)))}',
  ])
})

test('different variant producde different hashes', () => {
  expect(instance.bw('sm:text-center lg:text-center')).toBe('_1vpmzwf _6lc98d')
  expect(injector.target).toMatchObject([
    '@media (min-width: 640px){._1vpmzwf{text-align:center}}',
    '@media (min-width: 1024px){._6lc98d{text-align:center}}',
  ])
})
