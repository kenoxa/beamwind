import { createInstance } from './instance'

const instance = createInstance()

export const { bw } = instance
export const { setup } = instance
export const { theme } = instance

export * from './hash'
export * from './injectors'
export * from './instance'
export * from './prefix'
export * from './modes'
export { join, tail } from './util'
export * from './helpers'
