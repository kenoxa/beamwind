import { bw, setup, strict } from '.'

setup({ mode: strict })

test('smoke', () => {
  expect(
    bw`absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl`,
  ).toBe(
    '_1mkfpkn _o006n8 _1gt8na1 _3r61se _b5dbz4 _78gvop _qlfj4a _1oj810o _zn5i58 _15ut5d7 _1xnjrmz',
  )
})

test('readme example', () => {
  expect(bw`h-full bg-pink-700 text-white flex items-center justify-center`).toBe(
    '_ma35kl _jlwdch _hmry11 _1l0yvu6 _1ylnts1 _qemgvh',
  )

  expect(
    bw`
      text(4xl underline)
      font(bold sans)
      transition
      hover:(transform rotate-6 scale-125 cursor-pointer)
      active:(transform -rotate-12 scale-150)
    `,
  ).toBe(
    '_9zien4 _1rn96fu _1u8tsvs _vx8z01 _iniysy _x296mn _1j64bid _w2d1r2 _wby2l1 _yh0gbd _o8s3jw _n71xy2',
  )
})
