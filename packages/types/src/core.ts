import type { Falsy } from './util'
import type { Declarations } from './common'
import type { ThemeValueResolver } from './theme'

export interface TokenGrouping extends Record<string, Token> {}

type TypescriptCompat = boolean | number

export type Token = string | InlinePlugin | TokenGrouping | Token[] | Falsy | TypescriptCompat

export type InjectKeyframes = (name: string, waypoints?: Record<string, Declarations>) => string

export interface PluginApply {
  (strings: TemplateStringsArray, ...interpolations: Token[]): PluginTokenResult
  (...tokens: Token[]): PluginTokenResult
}

export type TokenParser = (token: Token) => void
export type PluginTokenResult = (parse: TokenParser) => void

export interface PluginContext {
  readonly keyframes: InjectKeyframes
  readonly tag: (token: string) => string
}

export type SelectorDecorator = (selector: string) => string

export type PluginResult =
  | string
  | Declarations
  | [suffix: string, declarations: Declarations | Falsy]
  | [selectorDecorator: SelectorDecorator, declarations: Declarations | Falsy]
  | Falsy

export type Plugin =
  | PluginResult
  | ((
      parts: string[],
      theme: ThemeValueResolver,
      context: PluginContext,
    ) => PluginResult | PluginTokenResult)

export type InlinePlugin = (
  theme: ThemeValueResolver,
  context: PluginContext,
) => PluginResult | PluginTokenResult
