import type { Mode } from './types'

import { join } from './util'

export const mode = (report: (message: string) => void): Mode => ({
  unknown(section, parts, optional) {
    if (!optional) {
      // TODO hint about possible values, did you mean ...
      // TODO stacktrace from callee [message, new Error().stack.split('at ').pop()].join(' ');
      report(`No theme value found for ${section}[${JSON.stringify(join(parts) || 'DEFAULT')}]`)
    }
  },

  warn(message, directive) {
    report((directive ? `[${directive}] ` : '') + message)
  },
})

export const warn = mode((message) => console.warn(message))

export const strict = mode((message) => {
  throw new Error(message)
})
