import type { ConfigurationOptions, Mode } from '@beamwind/types'

import { play } from './play'

export interface PlayOptions {
  mode: Mode
}

export default ({ mode }: PlayOptions): ConfigurationOptions => ({ mode: play(mode) })
