import type { Token } from './core'
import type { ConfigurationOptions } from './config'
import type { ThemeResolver } from './theme'

export interface ClassNameCreator {
  (strings: TemplateStringsArray, ...interpolations: Token[]): string
  (...tokens: Token[]): string
}

export interface Instance {
  readonly bw: ClassNameCreator
  readonly setup: (options?: ConfigurationOptions | ConfigurationOptions[]) => void
  readonly theme: ThemeResolver
}
