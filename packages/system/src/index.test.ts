import { bw, setup, strict } from '.'

setup({ mode: strict })

test('smoke', () => {
  expect(
    bw`absolute inset-0 bg-gradient-to-r from-promote to-on-promote shadow-lg transform -skew-y-md sm:skew-y-none sm:-rotate-lg sm:rounded-3xl`,
  ).toBe(
    '_1mkfpkn _o006n8 _1gt8na1 _bgnw62 _1afdwys _78gvop _1gdx5xp _1dkoody _1i2ygol _107qm68 _9pmjrn',
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
    '_9zien4 _1rn96fu _1u8tsvs _vx8z01 _iniysy _1nib7jt _125ip9e _13zhynp _vdrcah _wvnkih _19wprbf _1is70uq',
  )
})
