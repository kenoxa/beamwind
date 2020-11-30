import { bw } from '.'

test('smoke', () => {
  expect(
    bw`absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl`,
  ).toBe(
    '_1mkfpkn _o006n8 _1gt8na1 _3r61se _b5dbz4 _78gvop _qlfj4a _1oj810o _zn5i58 _15ut5d7 _1xnjrmz',
  )
})
