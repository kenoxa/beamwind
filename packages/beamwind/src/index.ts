import { createInstance } from './instance'

const instance = createInstance()

export const { bw } = instance
export const { setup } = instance

export * from './hash'
export * from './injectors'
export * from './instance'
export * from './prefix'
export { consoleWarn as warn } from './context'
export { fail, join, tail } from './util'
export * from './helpers'

export * from './types'
