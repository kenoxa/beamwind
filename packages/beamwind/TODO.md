https://tailwindcss.com/docs/transform#class-reference
https://github.com/tailwindlabs/tailwindcss/pull/2531
https://tailwindcss.com/docs/grid-auto-columns
https://github.com/tailwindlabs/tailwindcss-aspect-ratio

- @beamwind/prose: https://tailwindcss.com/docs/typography-plugin
  - implement as plugin -> plugins may need to know what variants are already applied

https://theme-ui.com/color-modes/:

- https://github.com/tailwindlabs/tailwindcss/pull/2279
- https://github.com/tailwindlabs/tailwindcss/pull/2631
  @beamwind/preset-dark, @beamwind/preset-light
  @beamwin/preset-tailwind with all v2 colors: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

Server Side Rendering including re-hydration
@beamwind/ssr

https://tailwindui.com/components
@tailwindcss/forms: https://github.com/tailwindlabs/tailwindcss-forms

https://tailwindcss.com/docs/intellisense

important: needs a use case before implementing

```
text-bold!important
```

> These require to drop IE11 support

https://tailwindcss.com/docs/ring-width

https://tailwindcss.com/docs/gradient-color-stops#class-reference
https://tailwindcss.com/docs/background-image#class-reference
https://github.com/tailwindlabs/tailwindcss/pull/1883

```html
<div class="css`h-24 bg-gradient-to-r_from-teal-400_to-blue-500`"></div>
<div class="h-24 bg-gradient-to-r from-teal-400 to-blue-500"></div>

<div class="css`h-24 bg-gradient-to-r_from-teal-400_via-red-500_to-blue-500`"></div>
<div class="h-24 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500"></div>

<style>
  .h-24 {
    height: 6rem;
  }

  .bg-gradient-to-r_from-orange-400_via-red-500_to-pink-500 {
    background-image: linear-gradient(to right, #f6ad55, #f56565, #ed64a6);
  }
</style>
```
