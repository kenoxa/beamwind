import type { ThemeConfiguration, ThemeResolver } from './theme'
import type { Plugin } from './core'
import type { Mode } from './mode'

export interface InjectorConfig<T = unknown> {
  /**
   * Sets a cryptographic nonce (number used once) on the enclosing `<style>` tag when generating a page on demand.
   *
   * Useful for enforcing a [Content Security Policy (CSP)](https://developer.mozilla.org/docs/Web/HTTP/CSP).
   */
  nonce?: string

  /** Target to insert rules into. */
  target?: T
}

export interface Injector<T = unknown> {
  /** Target the rules are inserted into. */
  target: T

  insert: (rule: string, index: number) => void
}

export type Prefixer = (property: string, value: string) => string

export type Hasher = (value: string) => string

export type OnInitCallback = (rule: string) => void

export type OnInit = (insert: OnInitCallback, theme: ThemeResolver) => void

export interface ConfigurationOptions {
  theme?: ThemeConfiguration

  plugins?: Record<string, Plugin>

  /**
   * Sets a cryptographic nonce (number used once) on the enclosing `<style>` tag when generating a page on demand.
   *
   * Useful for enforcing a [Content Security Policy (CSP)](https://developer.mozilla.org/docs/Web/HTTP/CSP).
   */
  nonce?: string

  /** Style insertion methodology to be used. */
  injector?: Injector

  /** Called right before the first rule is injected. */
  init?: OnInit

  /** Auto-prefixer method for CSS property–value pairs. */
  prefix?: Prefixer

  hash?: Hasher | false

  mode?: Mode
}
