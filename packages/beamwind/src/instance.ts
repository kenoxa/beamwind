import type { Instance, ConfigurationOptions } from './types'

import { createContext } from './context'
import { asTokens } from './util'
import { process } from './process'

export const createInstance = (
  options?: ConfigurationOptions | ConfigurationOptions[],
): Instance => {
  const context = createContext(options)

  return {
    cx: (...tokens: unknown[]) => process(asTokens(tokens), context),

    setup: context.c,
  }
}
