import type { Token } from './core'
import type { ConfigurationOptions } from './config'

export interface ClassNameCreator {
  (strings: TemplateStringsArray, ...interpolations: Token[]): string
  (...tokens: Token[]): string
}

export interface Instance {
  bw: ClassNameCreator
  setup: (options?: ConfigurationOptions | ConfigurationOptions[]) => void
}
