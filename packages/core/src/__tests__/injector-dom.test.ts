import { bw, setup, virtualInjector } from '..'

test('injects in to a style sheet element', () => {
  expect(document.querySelector('#__beamwind')).toBeFalsy()

  expect(bw('group flex text-center md:text-left')).toBe('_1bk5mm5 _1l0yvu6 _1gpf024 _d88ggk')

  const style = document.querySelector('#__beamwind') as HTMLStyleElement

  expect(document.querySelector('#__beamwind')).toBeInstanceOf(HTMLStyleElement)

  expect([...(style.sheet?.cssRules || [])].map((rule) => rule.cssText)).toMatchObject([
    '._1l0yvu6 {display: flex;}',
    '._1gpf024 {text-align: center;}',
    '@media (min-width: 768px) {._d88ggk {text-align: left;}}',
  ])

  // Can not change injector after first use
  expect(() => {
    setup({ injector: virtualInjector() })
  }).toThrow('Changing the injector after first use is not supported')
})
