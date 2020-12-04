import { bw, setup, strict } from '.'

setup({ mode: strict })

test('smoke', () => {
  expect(
    bw`absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl`,
  ).toBe(
    '_1mkfpkn _o006n8 _1gt8na1 _3r61se _b5dbz4 _78gvop _1gdx5xp _1gscjwr _1i2ygol _107qm68 _9pmjrn',
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
    '_9zien4 _1rn96fu _1u8tsvs _vx8z01 _iniysy _1nib7jt _15194jw _13zhynp _vdrcah _wvnkih _19wprbf _1is70uq',
  )
})

test('all tailwind directive are available', async () => {
  const { processPlugins } = await import('./__fixtures__/process-plugins')

  const { directives } = processPlugins()

  for (const directive of Object.keys(directives)) {
    try {
      expect(bw(directive)).toBeTruthy()
    } catch (error) {
      if (isFontVariantNumeric(directive)) {
        // TODO https://tailwindcss.com/docs/font-variant-numeric
      } else {
        console.warn(directive, directives[directive])
        throw error
      }
    }
  }
})

function isFontVariantNumeric(directive: string): boolean {
  return (
    directive === 'ordinal' ||
    directive.endsWith('-zero') ||
    directive.endsWith('-nums') ||
    directive.endsWith('-fractions')
  )
}
