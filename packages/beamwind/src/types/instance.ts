import type { Token } from './common'
import type { ConfigurationOptions } from './config'

export interface ClassNameCreator {
  (strings: TemplateStringsArray, ...interpolations: Token[]): string
  (...tokens: Token[]): string
}

export interface Instance {
  cx: ClassNameCreator
  setup: (options?: ConfigurationOptions | ConfigurationOptions[]) => void
}
