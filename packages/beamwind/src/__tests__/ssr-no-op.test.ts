/**
 * @jest-environment node
 */

import { cx } from '..'

test('uses the no-op injector by default', () => {
  expect(cx('group flex pt-4 text-center md:text-left')).toBe(
    '_1bk5mm5 _1l0yvu6 _xqpuic _1gpf024 _dg11mi',
  )
})
