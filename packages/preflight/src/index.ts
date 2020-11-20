import { preflight, Theme } from './preflight'

export type { Theme }

export type OnInitCallback = (rule: string) => void

export default {
  init(insert: OnInitCallback, theme: Theme): void {
    preflight(theme).forEach(insert)
  },
}
