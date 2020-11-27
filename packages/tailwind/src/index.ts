import tailwind from '@beamwind/preset-tailwind'
import preflight from '@beamwind/preflight'
import { createInstance } from 'beamwind'

const instance = createInstance([tailwind, preflight])

export const { bw: tw } = instance
export const { setup } = instance
