import type { ConfigurationOptions } from '@beamwind/types'

import type { Options } from './types'

import { theme } from './theme'

export default (options?: Options): ConfigurationOptions => ({
  theme: theme(options),
})

export * from './types'
