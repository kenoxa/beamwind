/* eslint-disable tsdoc/syntax */
/**
 * @jest-environment node
 */
/* eslint-enable tsdoc/syntax */

import { bw } from '..'

test('uses the no-op injector by default', () => {
  expect(bw('group flex text-center md:text-left')).toBe('_1bk5mm5 _1l0yvu6 _1gpf024 _d88ggk')
})
