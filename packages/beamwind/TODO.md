pre-commit hook to format files

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

```
:root
--tw-shadow: 0 0 transparent;
--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
--tw-ring-offset-width: 0px;
--tw-ring-offset-color: #fff;
--tw-ring-color: rgba(59,130,246,0.5);
--tw-ring-offset-shadow: 0 0 transparent;
--tw-ring-shadow: 0 0 transparent;


.ring-4
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);

.ring-pink-300
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(249,168,212,var(--tw-ring-opacity));

.ring-inset
  --tw-ring-inset: inset;

.ring
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent);
```

https://tailwindcss.com/docs/background-image#background-images
