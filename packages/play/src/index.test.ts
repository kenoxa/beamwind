import { bw } from '.'

beforeAll(() => {
  console.warn = (message: string) => {
    throw new Error(message)
  }
})

test('smoke', () => {
  expect(
    bw`absolute inset-0 bg-gradient-to-r from-promote to-purple-200 shadow-lg transform -skew-y-md sm:skew-y-none sm:-rotate-lg sm:rounded-3xl`,
  ).toBe(
    '_1mkfpkn _o006n8 _1gt8na1 _bgnw62 _k5uxb4 _78gvop _qlfj4a _j83m71 _expf4v _1l34gu8 _9pmjrn',
  )
})

test('readme example', () => {
  expect(bw`h-full bg-#DB2777 text-#E5E7EB flex items-center justify-center`).toBe(
    '_ma35kl _1pncuk4 _ctkn65 _1l0yvu6 _1ylnts1 _qemgvh',
  )

  expect(
    bw`
      text(2.5rem underline)
      font(bold sans)
      transition
      hover:(transform rotate-7 scale-135 cursor-pointer)
      active:(transform -rotate-23 scale-175)
    `,
  ).toBe(
    '_1r5djcv _1rn96fu _1u8tsvs _vx8z01 _iniysy _2fdrgx _1ezt492 _sfwoeg _vdrcah _1yvlsvh _akeo5l _108a1dt',
  )
})
