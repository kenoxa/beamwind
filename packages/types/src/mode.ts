import type { Theme, ThemeResolver, ThemeSectionValueType } from './theme'

export interface Mode {
  unknown: <Section extends keyof Theme>(
    section: Section,
    keypath: string[],
    optional: boolean | undefined,
    theme: ThemeResolver,
  ) => ThemeSectionValueType<Theme[Section]> | undefined | void

  warn: (message: string, directive?: string) => void
}
