// Based on https://github.com/kripod/otion/blob/main/packages/otion/src/injectors.ts
// License MIT
import type { InjectorConfig, Injector } from './types'

const STYLE_ELEMENT_ID = '__beamwind'

const getStyleElement = (nonce?: string): HTMLStyleElement => {
  // Hydrate existing style element if available
  // eslint-disable-next-line unicorn/prefer-query-selector
  let element = document.getElementById(STYLE_ELEMENT_ID) as HTMLStyleElement | null

  if (!element) {
    // Create a new one otherwise
    element = document.createElement('style')

    element.id = STYLE_ELEMENT_ID
    nonce && (element.nonce = nonce)

    // eslint-disable-next-line unicorn/prefer-node-append
    document.head.appendChild(element)
  }

  return element
}

/**
 * Creates an injector which collects style rules during server-side rendering.
 */
export const virtualInjector = ({ target = [] }: InjectorConfig<string[]> = {}): Injector<
  string[]
> => ({
  target,
  insert: (rule, index) => target.splice(index, 0, rule),
})

/**
 * Creates an injector which inserts style rules through the CSS Object Model.
 */
export const cssomInjector = ({
  nonce,
  target = getStyleElement(nonce).sheet as CSSStyleSheet,
}: InjectorConfig<CSSStyleSheet> = {}): Injector<CSSStyleSheet> => ({
  target,
  insert: target.insertRule.bind(target),
})

/**
 * An injector placeholder which performs no operations. Useful for avoiding errors in a non-browser environment.
 */
export const noOpInjector = (): Injector<null> => ({
  target: null,
  insert: () => {
    /* No-Op */
  },
})
