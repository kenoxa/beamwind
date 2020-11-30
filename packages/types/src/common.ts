// Declaration => property: value
// rule => selector { declaration }

import type { Falsy } from './util'

export type Declarations = Record<string, string | string[] | Falsy>
