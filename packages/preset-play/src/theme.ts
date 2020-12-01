import type { ThemeConfiguration } from '@beamwind/types'

export const theme: ThemeConfiguration = (base) => ({
  stroke: (theme) => ({
    ...base('stroke'),
    ...theme('colors'),
  }),
})
