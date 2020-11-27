Link to https://nerdcave.com/tailwind-cheat-sheet

default to strict mode and allow only known values

preset-semantic: use callback theme to adjust all existing colors

oceanwind issue:

- discuss format (grouping variants and directives)
- plugin api

architecure section

- beamwind:
  - foreach directive
    - search plugin
    - inject one css rules for each directive
- oceanwind:
  - parses directives into one css declaration object
  - otion generates atomic styles
  - may lead to invalid ordering

pre-commit hook to format files

space-x-reverse
divide-y-reverse

doc: IE11 - which directives do not work (ring); which have fallbacks (\*-opacity)

transform-gpu: https://github.com/tailwindlabs/tailwindcss/pull/1380
https://github.com/tailwindlabs/tailwindcss/pull/2531
https://tailwindcss.com/docs/grid-auto-columns
https://github.com/tailwindlabs/tailwindcss-aspect-ratio
https://github.com/tailwindlabs/tailwindcss/pull/2910
https://tailwindcss.com/docs/background-image#background-images

- @beamwind/prose: https://tailwindcss.com/docs/typography-plugin
  - implement as plugin??

https://theme-ui.com/color-modes/:

- https://github.com/tailwindlabs/tailwindcss/pull/2279
- https://github.com/tailwindlabs/tailwindcss/pull/2631
  @beamwind/preset-dark, @beamwind/preset-light

Server Side Rendering including re-hydration
@beamwind/ssr

https://tailwindui.com/components
@tailwindcss/forms: https://github.com/tailwindlabs/tailwindcss-forms

Autocompletion:
https://tailwindcss.com/docs/intellisense
https://github.com/kingdaro/typescript-plugin-tw-template

https://github.com/ben-rogerson/twin.macro
💥 Add important to any class with a trailing bang!

bw`hidden!`
// ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
{ "display": "none !important" }
