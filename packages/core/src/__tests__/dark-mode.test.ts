import type { Instance, Injector } from '../types'

import { createInstance, virtualInjector } from '..'

import theme from '../__fixtures__/theme'

let injector: Injector<string[]>
let instance: Instance

beforeEach(() => {
  injector = virtualInjector()
  instance = createInstance({ injector, theme, hash: false })
})

test('default to dark mode media strategy', () => {
  expect(instance.bw('text-white dark:text-black')).toBe('text-white dark:text-black')
  expect(injector.target).toMatchObject([
    '.text-white{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}',
    '@media (prefers-color-scheme:dark){.dark\\:text-black{--text-opacity:1;color:#000;color:rgba(0,0,0,var(--text-opacity))}}',
  ])
})

test('dark mode class strategy', () => {
  instance.setup({ darkMode: 'class' })
  expect(instance.bw('text-white dark:text-black')).toBe('text-white dark:text-black')
  expect(injector.target).toMatchObject([
    '.text-white{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}',
    '.dark .dark\\:text-black{--text-opacity:1;color:#000;color:rgba(0,0,0,var(--text-opacity))}',
  ])
})

test('dark mode custom class strategy', () => {
  instance.setup({ darkMode: 'class', darkModeClass: 'dunkel' })

  expect(instance.bw('text-white dark:text-black')).toBe('text-white dark:text-black')
  expect(injector.target).toMatchObject([
    '.text-white{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}',
    '.dunkel .dark\\:text-black{--text-opacity:1;color:#000;color:rgba(0,0,0,var(--text-opacity))}',
  ])
})

test('stacking with screens', () => {
  expect(instance.bw('text-#111 dark:text-#222 lg:text-black lg:dark:text-white')).toBe(
    'text-#111 dark:text-#222 lg:text-black lg:dark:text-white',
  )
  expect(injector.target).toMatchObject([
    '.text-\\#111{--text-opacity:1;color:#111;color:rgba(17,17,17,var(--text-opacity))}',
    '@media (prefers-color-scheme:dark){.dark\\:text-\\#222{--text-opacity:1;color:#222;color:rgba(34,34,34,var(--text-opacity))}}',
    '@media (min-width: 1024px){.lg\\:text-black{--text-opacity:1;color:#000;color:rgba(0,0,0,var(--text-opacity))}}',
    '@media (min-width: 1024px){@media (prefers-color-scheme:dark){.lg\\:dark\\:text-white{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}}}',
  ])
})

test('stacking with other variants', () => {
  expect(instance.bw('text-#111 hover:text-#222 lg:dark:text-black lg:dark:hover:text-white')).toBe(
    'text-#111 hover:text-#222 lg:dark:text-black lg:dark:hover:text-white',
  )
  expect(injector.target).toMatchObject([
    '.text-\\#111{--text-opacity:1;color:#111;color:rgba(17,17,17,var(--text-opacity))}',
    '.hover\\:text-\\#222:hover{--text-opacity:1;color:#222;color:rgba(34,34,34,var(--text-opacity))}',
    '@media (min-width: 1024px){@media (prefers-color-scheme:dark){.lg\\:dark\\:text-black{--text-opacity:1;color:#000;color:rgba(0,0,0,var(--text-opacity))}}}',
    '@media (min-width: 1024px){@media (prefers-color-scheme:dark){.lg\\:dark\\:hover\\:text-white:hover{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}}}',
  ])
})
