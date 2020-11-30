import system from '@beamwind/preset-system'
import preflight from '@beamwind/preflight'
import { createInstance } from '@beamwind/core'

const instance = createInstance([preflight(), system()])

export const { bw } = instance
export const { setup } = instance
export const { theme } = instance

// Re-export common configuration utilities
export {
  strict,
  warn,
  noprefix,
  cyrb32,
  cssomInjector,
  noOpInjector,
  virtualInjector,
} from '@beamwind/core'
