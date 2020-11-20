import { reset, Theme } from './reset'

export type { Theme }

export type OnInitCallback = (rule: string) => void

export default {
  init(insert: OnInitCallback, theme: Theme): void {
    reset(theme).forEach(insert)
  },
}
