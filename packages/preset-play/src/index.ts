import type { ConfigurationOptions, Mode } from '@beamwind/types'

import { play } from './play'
import { theme } from './theme'

export interface PlayOptions {
  mode: Mode
}

export default ({ mode }: PlayOptions): ConfigurationOptions => ({ theme, mode: play(mode) })
