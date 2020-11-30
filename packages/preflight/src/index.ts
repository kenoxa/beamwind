import type { ConfigurationOptions } from '@beamwind/types'

import { preflight } from './preflight'

export default (): ConfigurationOptions => ({
  init(insert, theme): void {
    preflight(theme).forEach(insert)
  },
})
