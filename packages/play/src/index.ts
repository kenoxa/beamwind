import tailwind from '@beamwind/preset-tailwind'
import system from '@beamwind/preset-system'
import play from '@beamwind/preset-play'
import preflight from '@beamwind/preflight'
import { createInstance, warn } from '@beamwind/core'

const instance = createInstance([preflight(), tailwind(), system(), play({ mode: warn })])

export const { bw } = instance
export const { setup } = instance
export const { theme } = instance

// Re-export common configuration utilities
export { noprefix, cyrb32, cssomInjector, noOpInjector, virtualInjector } from '@beamwind/core'
