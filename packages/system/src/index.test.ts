import { bw, setup, strict } from '.'

setup({ mode: strict })

test('smoke', () => {
  expect(
    bw`absolute inset-0 bg-gradient-to-r from-promote to-on-promote shadow-lg transform -skew-y-md sm:skew-y-none sm:-rotate-lg sm:rounded-3xl`,
  ).toBe(
    '_1mkfpkn _o006n8 _1gt8na1 _bgnw62 _1afdwys _lae5pa _gqktp6 _i5h0pq _1w053pr _1vzslrt _9pmjrn',
  )
})

test('readme example', () => {
  expect(bw`h-full bg-promote flex items-center justify-center`).toBe(
    '_ma35kl _1qb3hgf _1l0yvu6 _1ylnts1 _qemgvh',
  )

  expect(
    bw`
      text(4xl underline)
      font(bold sans)
      transition
      hover:(transform rotate-md scale-2xl cursor-pointer)
      active:(transform -rotate-xl scale-3xl)
    `,
  ).toBe(
    '_9zien4 _1rn96fu _1u8tsvs _vx8z01 _iniysy _1crosn3 _1ry7tt8 _z6b2rb _vdrcah _vzti3v _rqq84r _1mwh623',
  )
})
