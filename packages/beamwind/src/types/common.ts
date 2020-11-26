// Declaration => property: value
// rule => selector { declaration }

import type { Falsy } from './util'

export interface TokenGrouping extends Record<string, Token> {}

type TypescriptCompat = boolean | number

export type Token = string | Falsy | TokenGrouping | Token[] | TypescriptCompat

export type Declarations = Record<string, string | string[] | Falsy>
