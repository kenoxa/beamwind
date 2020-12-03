// https://github.com/kingdaro/typescript-plugin-tw-template/blob/master/src/index.ts
// https://github.com/microsoft/typescript-styled-plugin/blob/master/README.md
// https://github.com/Quramy/ts-graphql-plugin/tree/master/src
// https://github.com/tailwindlabs/tailwindcss-intellisense/tree/master/packages/tailwindcss-language-service

import type * as ts from 'typescript/lib/tsserverlibrary'
import { BeamwindPlugin } from './plugin'

export = (config: { typescript: typeof ts }): BeamwindPlugin => new BeamwindPlugin(config.typescript)
