import type { ConfigurationOptions } from '@beamwind/types'

import { reset } from './reset'

export default (): ConfigurationOptions => ({
  init(insert, theme): void {
    reset(theme).forEach(insert)
  },
})
