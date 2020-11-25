import type { Falsy } from './util'
import type { Declarations, Token } from './common'
import type { ThemeValueResolver } from './theme'

export type InjectKeyframes = (name: string, waypoints?: Record<string, Declarations>) => string

export interface PluginApply {
  (strings: TemplateStringsArray, ...interpolations: Token[]): PluginTokenResult
  (...tokens: Token[]): PluginTokenResult
}

export type TokenParser = (token: Token) => void
export type PluginTokenResult = (parse: TokenParser) => void

export interface PluginContext {
  readonly keyframes: InjectKeyframes
  readonly variants: readonly string[]
  readonly tag: (token: string) => string
}

export type PluginResult =
  | string
  | Declarations
  | [suffix: string, declarations: Declarations | Falsy]
  | Falsy

export type Plugin =
  | PluginResult
  | ((
      parts: string[],
      theme: ThemeValueResolver,
      context: PluginContext,
    ) => PluginResult | PluginTokenResult)
