import { bw, setup, virtualInjector } from '..'

test('injects in to a style sheet element', () => {
  expect(document.querySelector('#__beamwind')).toBeFalsy()

  expect(bw('group flex pt-4 text-center md:text-left')).toBe(
    '_1bk5mm5 _1l0yvu6 _xqpuic _1gpf024 _dg11mi',
  )

  const style = document.querySelector('#__beamwind') as HTMLStyleElement

  expect(document.querySelector('#__beamwind')).toBeInstanceOf(HTMLStyleElement)

  expect([...(style.sheet?.cssRules || [])].map((rule) => rule.cssText)).toMatchObject([
    '._1l0yvu6 {display: flex;}',
    '._xqpuic {padding-top: 1rem;}',
    '._1gpf024 {text-align: center;}',
    '@media (min-width: 768px) {._dg11mi {text-align: left;}}',
  ])

  // Can not change injector after first use
  expect(() => {
    setup({ injector: virtualInjector() })
  }).toThrow('Changing the injector after first use is not supported')
})
