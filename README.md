# Beamwind

> a [collection of packages](#packages) to compile [Tailwind CSS] like shorthand syntax into CSS at runtime

[![MIT License](https://badgen.net/github/license/kenoxa/beamwind)](https://github.com/kenoxa/beamwind/blob/main/LICENSE)
[![Latest Release](https://flat.badgen.net/npm/v/@beamwind/core?icon=npm&label)](https://www.npmjs.com/package/@beamwind/core)
[![Bundle Size](https://flat.badgen.net/bundlephobia/minzip/@beamwind/core?icon=packagephobia&label&color=blue)](https://bundlephobia.com/result?p=@beamwind/core)
[![Github](https://flat.badgen.net/badge/icon/kenoxa%2Fbeamwind?icon=github&label)](https://github.com/kenoxa/beamwind)
[![Typescript](https://flat.badgen.net/badge/icon/included?icon=typescript&label)](https://unpkg.com/browse/@beamwind/core/types/core.d.ts)
[![CI](https://github.com/kenoxa/beamwind/workflows/CI/badge.svg)](https://github.com/kenoxa/beamwind/actions?query=workflow%3Aci)
[![Coverage Status](https://flat.badgen.net/coveralls/c/github/kenoxa/beamwind/main?icon=codecov&label)](https://coveralls.io/github/kenoxa/beamwind?branch=main)
[![PRs Welcome](https://flat.badgen.net/badge/PRs/welcome/purple)](http://makeapullrequest.com)

> [Read the docs](https://beamwind.js.org) |
> [API](https://beamwind.js.org/packages/beamwind) |
> [Change Log](https://github.com/kenoxa/beamwind/blob/main/packages/core/CHANGELOG.md) |
> [⚡️ Demo](https://esm.codes/#Ly8gQmVhbXdpbmQgZGVtbyAoYmFzZWQgb24gY29kZSBieSBAbHVrZWphY2tzb25uIC0gY3JlYXRvciBvZiBvY2VhbndpbmQpCi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCiAgICAKaW1wb3J0IHsgcmVuZGVyLCBodG1sIH0gZnJvbSAnaHR0cHM6Ly9ucG0ucmV2ZXJzZWh0dHAuY29tL3ByZWFjdCxwcmVhY3QvaG9va3MsaHRtL3ByZWFjdCc7CmltcG9ydCB7IGJ3IH0gZnJvbSAnaHR0cHM6Ly91bnBrZy5jb20vYmVhbXdpbmQ/bW9kdWxlJwoKCmNvbnN0IHN0eWxlID0gewogIC8vIEV4YW1wbGUgb2YgYWJzdHJhY3RlZCBzdHlsZQogIGNvbnRhaW5lcjogYndgaC1mdWxsIGJnLXBpbmstNzAwIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJgCn0KCnJlbmRlcigKICBodG1sYAogICAgPGRpdiBjbGFzcz0ke3N0eWxlLmNvbnRhaW5lcn0+CiAgICAgIDxoMSBjbGFzcz0kewogICAgICAgIC8vIEV4YW1wbGUgb2YgYW4gaW5saW5lIHN0eWxlCiAgICAgICAgYndgCiAgICAgICAgICB0ZXh0KDR4bCB1bmRlcmxpbmUpCiAgICAgICAgICBmb250KGJvbGQgc2FucykKICAgICAgICAgIHRyYW5zaXRpb24KICAgICAgICAgIGhvdmVyOih0cmFuc2Zvcm0gcm90YXRlLTYgc2NhbGUtMTI1IGN1cnNvci1wb2ludGVyKQogICAgICAgICAgYWN0aXZlOih0cmFuc2Zvcm0gLXJvdGF0ZS0xMiBzY2FsZS0xNTApCiAgICAgICAgYAogICAgICB9PkhlbGxvIFdvcmxkPC9oMT4KICAgIDwvZGl2PgogIGAsCiAgZG9jdW1lbnQuYm9keQopOw==)

---

This library takes inspiration from [Tailwind CSS] ([see differences](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/README.md#tailwind-differences)), [Oceanwind] ([see differences](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/README.md#oceanwind-differences)) and [Otion] to provide means of efficiently generating mostly atomic styles from shorthand syntax and appending them to the DOM at runtime.

[beamwind](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind) uses the [tailwind default theme](https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js) ([@beamwind/preset-tailwind](https://github.com/kenoxa/beamwind/blob/main/packages/preset-tailwind)) and an opinionated set of base styles for modern browsers based on [Tailwind Preflight](https://tailwindcss.com/docs/preflight)
([@beamwind/preflight](https://github.com/kenoxa/beamwind/blob/main/packages/preflight)):

```js
import { bw } from 'beamwind'

document.body.className = bw`h-full bg-pink-700 rotate-3 scale-95`
```

> ⚡️ Check out the [live and interactive demo](https://esm.codes/#Ly8gQmVhbXdpbmQgZGVtbyAoYmFzZWQgb24gY29kZSBieSBAbHVrZWphY2tzb25uIC0gY3JlYXRvciBvZiBvY2VhbndpbmQpCi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCiAgICAKaW1wb3J0IHsgcmVuZGVyLCBodG1sIH0gZnJvbSAnaHR0cHM6Ly9ucG0ucmV2ZXJzZWh0dHAuY29tL3ByZWFjdCxwcmVhY3QvaG9va3MsaHRtL3ByZWFjdCc7CmltcG9ydCB7IGJ3IH0gZnJvbSAnaHR0cHM6Ly91bnBrZy5jb20vYmVhbXdpbmQ/bW9kdWxlJwoKCmNvbnN0IHN0eWxlID0gewogIC8vIEV4YW1wbGUgb2YgYWJzdHJhY3RlZCBzdHlsZQogIGNvbnRhaW5lcjogYndgaC1mdWxsIGJnLXBpbmstNzAwIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJgCn0KCnJlbmRlcigKICBodG1sYAogICAgPGRpdiBjbGFzcz0ke3N0eWxlLmNvbnRhaW5lcn0+CiAgICAgIDxoMSBjbGFzcz0kewogICAgICAgIC8vIEV4YW1wbGUgb2YgYW4gaW5saW5lIHN0eWxlCiAgICAgICAgYndgCiAgICAgICAgICB0ZXh0KDR4bCB1bmRlcmxpbmUpCiAgICAgICAgICBmb250KGJvbGQgc2FucykKICAgICAgICAgIHRyYW5zaXRpb24KICAgICAgICAgIGhvdmVyOih0cmFuc2Zvcm0gcm90YXRlLTYgc2NhbGUtMTI1IGN1cnNvci1wb2ludGVyKQogICAgICAgICAgYWN0aXZlOih0cmFuc2Zvcm0gLXJvdGF0ZS0xMiBzY2FsZS0xNTApCiAgICAgICAgYAogICAgICB9PkhlbGxvIFdvcmxkPC9oMT4KICAgIDwvZGl2PgogIGAsCiAgZG9jdW1lbnQuYm9keQopOw==)

---

As an alternative [@beamwind/system](https://github.com/kenoxa/beamwind/blob/main/packages/system) is a good start if you prefer a semantic naming scheme in your design system:

```js
import { bw } from '@beamwind/system'

document.body.className = bw`h-full bg-promote rotate-md scale-sm`
```

> ⚡️ Check out the [@beamwind/system demo](https://esm.codes/#Ly8gQmVhbXdpbmQgZGVtbyAoYmFzZWQgb24gY29kZSBieSBAbHVrZWphY2tzb25uIC0gY3JlYXRvciBvZiBvY2VhbndpbmQpCi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCiAgICAKaW1wb3J0IHsgcmVuZGVyLCBodG1sIH0gZnJvbSAnaHR0cHM6Ly9ucG0ucmV2ZXJzZWh0dHAuY29tL3ByZWFjdCxwcmVhY3QvaG9va3MsaHRtL3ByZWFjdCc7CmltcG9ydCB7IGJ3IH0gZnJvbSAnaHR0cHM6Ly91bnBrZy5jb20vQGJlYW13aW5kL3BsYXk/bW9kdWxlJwoKY29uc3Qgc3R5bGUgPSB7CiAgLy8gRXhhbXBsZSBvZiBhYnN0cmFjdGVkIHN0eWxlCiAgY29udGFpbmVyOiBid2BoLWZ1bGwgYmctcHJvbW90ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcmAKfQoKcmVuZGVyKAogIGh0bWxgCiAgICA8ZGl2IGNsYXNzPSR7c3R5bGUuY29udGFpbmVyfT4KICAgICAgPGgxIGNsYXNzPSR7CiAgICAgICAgLy8gRXhhbXBsZSBvZiBhbiBpbmxpbmUgc3R5bGUKICAgICAgICBid2AKICAgICAgICAgIHRleHQoNHhsIHVuZGVybGluZSkKICAgICAgICAgIGZvbnQoYm9sZCBzYW5zKQogICAgICAgICAgdHJhbnNpdGlvbgogICAgICAgICAgaG92ZXI6KHRyYW5zZm9ybSByb3RhdGUtbWQgc2NhbGUtMnhsIGN1cnNvci1wb2ludGVyKQogICAgICAgICAgYWN0aXZlOih0cmFuc2Zvcm0gLXJvdGF0ZS14bCBzY2FsZS0zeGwpCiAgICAgICAgYAogICAgICB9PkhlbGxvIFdvcmxkPC9oMT4KICAgIDwvZGl2PgogIGAsCiAgZG9jdW1lbnQuYm9keQopOw==)

---

For rapid prototyping [@beamwind/play](https://github.com/kenoxa/beamwind/blob/main/packages/play) is the right choice. It combines [@beamwind/preset-tailwind](https://github.com/kenoxa/beamwind/blob/main/packages/preset-tailwind) and [@beamwind/preset-system](https://github.com/kenoxa/beamwind/blob/main/packages/preset-tailwind) with [auto-conversion of unknown theme values](https://github.com/kenoxa/beamwind/blob/main/packages/preset-play):

```js
import { bw } from '@beamwind/play'

document.body.className = bw`h-full bg-#9556b7 rotate-5 scale-92`
```

> ⚡️ Check out the [@beamwind/play demo](https://esm.codes/#Ly8gQmVhbXdpbmQgZGVtbyAoYmFzZWQgb24gY29kZSBieSBAbHVrZWphY2tzb25uIC0gY3JlYXRvciBvZiBvY2VhbndpbmQpCi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCiAgICAKaW1wb3J0IHsgcmVuZGVyLCBodG1sIH0gZnJvbSAnaHR0cHM6Ly9ucG0ucmV2ZXJzZWh0dHAuY29tL3ByZWFjdCxwcmVhY3QvaG9va3MsaHRtL3ByZWFjdCc7CmltcG9ydCB7IGJ3IH0gZnJvbSAnaHR0cHM6Ly91bnBrZy5jb20vQGJlYW13aW5kL3BsYXk/bW9kdWxlJwoKLy8gVGFpbHdpbmQgYW5kIFN5c3RlbSB0aGVtZSB2YWx1ZXMgYXJlIGF2YWlsYWJsZQoKY29uc3Qgc3R5bGUgPSB7CiAgLy8gRXhhbXBsZSBvZiBhYnN0cmFjdGVkIHN0eWxlCiAgY29udGFpbmVyOiBid2BoLWZ1bGwgYmctI0RCMjc3NyB0ZXh0LSNFNUU3RUIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJgCn0KCnJlbmRlcigKICBodG1sYAogICAgPGRpdiBjbGFzcz0ke3N0eWxlLmNvbnRhaW5lcn0+CiAgICAgIDxoMSBjbGFzcz0kewogICAgICAgIC8vIEV4YW1wbGUgb2YgYW4gaW5saW5lIHN0eWxlCiAgICAgICAgYndgCiAgICAgICAgICB0ZXh0KDIuNXJlbSB1bmRlcmxpbmUpCiAgICAgICAgICBmb250KGJvbGQgc2FucykKICAgICAgICAgIHRyYW5zaXRpb24KICAgICAgICAgIGhvdmVyOih0cmFuc2Zvcm0gcm90YXRlLTcgc2NhbGUtMTM1IGN1cnNvci1wb2ludGVyKQogICAgICAgICAgYWN0aXZlOih0cmFuc2Zvcm0gLXJvdGF0ZS0yMyBzY2FsZS0xNzUpCiAgICAgICAgYAogICAgICB9PkhlbGxvIFdvcmxkPC9oMT4KICAgIDwvZGl2PgogIGAsCiAgZG9jdW1lbnQuYm9keQopOw==)

---

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Backstory](#backstory)
- [Key Features](#key-features)
- [Packages](#packages)
- [Usage](#usage)
- [Theming](#theming)
- [Plugins](#plugins)
- [Configuration](#configuration)
- [Selector Ordering](#selector-ordering)
- [Roadmap](#roadmap)
- [Tailwind Differences](#tailwind-differences)
- [Oceanwind Differences](#oceanwind-differences)
- [Compatibility](#compatibility)
- [Acknowledgements](#acknowledgements)
- [Contribute](#contribute)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

## Backstory

Design systems embrace a component-oriented mindset. Inspired by [Tailwind CSS], utility classes provide reusable styles with no unwanted side-effects. However, they have to be generated upfront.

Atomicity generalizes the former concept by instantiating style rules on demand. Serving as a solid foundation for constraint-based layouts, [atomic CSS-in-JS](https://sebastienlorber.com/atomic-css-in-js) has come to fluorish at scale.

## Key Features

- 📖 Supports the [vast majority](#missing-features) of Tailwind directives outlined [in the docs](https://tailwindcss.com/docs) ([see differences](#tailwind-differences))
- 🗜 Is smaller than the average purged css file output from the Tailwind compiler
- 🚀 Generates only the styles required without building or purging
- 💡 [Variant](#variant-grouping) and [Directive](#directive-grouping) grouping to reduce the overwhelming maze Tailwind sometimes creates
- 🧱 [Extendable with plugins](#plugins)
- 💅 [Customizable themeing](#theming)
- 🍱 [Reliable selector ordering](#selector-ordering)
- ⏱ [Performant runtime characteristics](https://github.com/kenoxa/beamwind/blob/main/benchmarks)
- 💫 Works without a framework - eg framework agnostic
- ⚠️ [Warns the developer](#catching-errors) when a unrecognized directive is used

> **Beamwind**: a wind blowing against a vessel from a direction at right angles to its keel for optimal speed

## Usage

> The following code examples will use [beamwind](https://github.com/kenoxa/beamwind/blob/main/package/beamwind).
> But the API is the same for [all packages](#packages).

To use the library, first import the module then invoke the `bw` export using tagged template syntax ([or one of the many other ways](#function-signature)):

```js
import { bw } from 'beamwind'

document.body.className = bw`h-full bg-purple-500 rotate-3 scale-95`
```

Running the above code will result in the following happening:

1. Parse directives (`h-full`, `bg-purple-500`, `rotate-3`, `scale-95`)
2. Translate directives into CSS rules using [plugins](#plugins) (e.g. `h-full -> { height: 100vh }`).
3. Inject each CSS rule with a unique class name into a library-managed style sheet
4. Return a space-separated string of class names

> If you are unfamiliar with the [Tailwind CSS] shorthand syntax please read the [Tailwind documentation](https://tailwindcss.com/docs) about [Utility-First](https://tailwindcss.com/docs/utility-first), [Responsive Design](https://tailwindcss.com/docs/responsive-design) and [Hover, Focus, & Other States](https://tailwindcss.com/docs/hover-focus-and-other-states).

### Variant Grouping

Directives with the same variants can be grouped using parenthesis. Beamwind will expand the nested directives; applying the variant to each directive in the group before translation. For example:

> Notice any directives within tagged template literals can span multiple lines

```js
bw`
  sm:hover:(
    bg-black
    text-white
  )
  md:(bg-white hover:text-black)
`
// => sm:hover:bg-black sm:hover:text-white md:bg-white md:hover:text-black
```

It is possible to nest groupings too, for example:

```js
bw`
  sm:(
    bg-black
    text-white
    hover:(bg-white text-black)
  )
`
// => sm:hover:bg-black sm:hover:text-white sm:hover:bg-white sm:hover:text-black
```

Object values which are String, Array or Object start a new variant group:

```js
bw({
  sm: {
    'bg-black': true,
    'text-white': true,
    hover: 'bg-white text-black',
  },
})
// => sm:hover:bg-black sm:hover:text-white sm:hover:bg-white sm:hover:text-black
```

> Two things to note here is that the outermost variant should always be a responsive variant (just like in tailwind `hover:sm:` is not supported) and that nesting responsive variants doesn't make sense either, for example `sm:md:` is not supported.

### Directive Grouping

Directives with the same prefix can be grouped using parenthesis. Beamwind will expand the nested directives; applying the prefix to each directive in the group before translation. For example:

```js
bw`text(center bold gray-500)`)
// => text-center text-bold text-gray-500

bw`divide(y-2 blue-500 opacity(75 md:50))`
// => divide-y-2 divide-blue-500 divide-opacity-75 md:divide-opacity-50

bw`w(1/2 sm:1/3 lg:1/6) p-sm`
// => w-1/2 sm:w-1/3 lg:w-1/6 p-sm
```

Some directives like [ring](https://tailwindcss.com/docs/ring-width) need to be applied as is. For that case you can use the special `&` directive which is replaced with the current prefix:

```js
bw`ring(& ping-700 offset(4 ping-200))`)
// => ring ring-ping-700 ring-offset-4 ring-offset-on-ping-200
```

### Function Signature

It is possible to invoke beamwind in a multitude of different ways. The [`bw` function](https://beamwind.js.org/packages/types/interfaces/instance.html#bw) can take **_any_** number of arguments, each of which can be an Object, Array, Boolean, Number, String or [inline plugins](#inline-plugins). This feature is based on [clsx](https://www.npmjs.com/package/cslx).

> **Important**: _Any_ falsey values are discarded!
> Standalone Boolean and Number values are discarded as well.

For example:

```js
// Tag Template Literal (falsey interpolations will be omitted)
bw`bg-gray-200 rounded`
//=> 'bg-gray-200 rounded'

bw`bg-gray-200 ${false && 'rounded'}`
//=> 'bg-gray-200'

bw`bg-gray-200 ${[false && 'rounded', 'block']}`
//=> 'bg-gray-200 block'

bw`bg-gray-200 ${{ rounded: false, underline: isTrue() }}`
//=> 'bg-gray-200 underline'

// Strings (variadic)
bw('bg-gray-200', true && 'rounded', 'underline')
//=> 'bg-gray-200 rounded underline'

// Objects (keys with falsey values will be omitted)
bw({ 'bg-gray-200': true, rounded: false, underline: isTrue() })
//=> 'bg-gray-200 underline'

// Objects (variadic)
bw({ 'bg-gray-200': true }, { rounded: false }, null, { underline: true })
//=> 'bg-gray-200 underline'

// Arrays (falsey items will be omitted)
bw(['bg-gray-200', 0, false, 'rounded'])
//=> 'bg-gray-200 rounded'

// Arrays (variadic)
bw(['bg-gray-200'], ['', 0, false, 'rounded'], [['underline', [['text-lg'], 'block']]])
//=> 'bg-gray-200 rounded underline text-lg block'

// Kitchen sink (with nest
bw(
  'bg-gray-200',
  [1 && 'rounded', { underline: false, 'text-secondary': null }, ['text-lg', ['shadow-lg']]],
  'uppercase',
)
//=> 'bg-gray-200 rounded text-lg shadow-lg uppercase'
```

> For advanced use cases `bw` additionally accepts [inline plugins](#inline-plugins).

### Directive Factories

Often you will find yourself in a position to need an abstraction to simplify the creation of directives. A best practice is to create a function that returns the required directives:

```js
const btn = (color) => {
  if (color) {
    return `bg-${color} hover:bg-${color}-hover active:bg-${color}-active`
  }

  return 'inline-block font-bold py-2 px-4 rounded'
}

bw(btn())
// => inline-block font-bold py-2 px-4 rounded

bw([btn(), btn('primary')])
// => inline-block font-bold py-2 px-4 rounded bg-primary hover:bg-primary-hover active:bg-primary-active
```

> This can be converted into a [component plugin](#adding-new-components).

### Extending the default theme

> The [Theming section](#theming) provides detailed insight into the theming options.

Importing and invoking `bw` directly will cause it to use the default theme of that package. To customize the theme, use the [`setup` export](https://beamwind.js.org/packages/types/interfaces/instance.html#setup). This will change the theme used by the `bw` export.

```js
import { bw, setup } from 'beamwind'

setup({
  theme: {
    extend: {
      colors: {
        'red-500': '#DC2626',
      },
    },
  },
})

bw`bg-red-500` // will result in a #DC2626 background-color
```

> `setup` can be called multiple times where each call extends the existing configuration.

Alternatively you can [create a own instance](#instance-creation):

```js
import { createInstance } from 'beamwind'

const cx = createInstance({
  theme: {
    extend: {
      colors: {
        'red-500': '#DC2626',
      },
    },
  },
})

cx`bg-red-500` // will result in a #DC2626 background-color
```

## Packages

> ready to use [instances](#instance-creation)

- [beamwind](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind) - using the [tailwind default theme](https://github.com/kenoxa/beamwind/blob/main/packages/preset-tailwind) and [preflight](https://github.com/kenoxa/beamwind/blob/main/packages/preflight)
- [@beamwind/system](https://github.com/kenoxa/beamwind/blob/main/packages/system) - using a [semantic design system](https://github.com/kenoxa/beamwind/blob/main/packages/preset-system) and [preflight](https://github.com/kenoxa/beamwind/blob/main/packages/preflight)
- [@beamwind/play](https://github.com/kenoxa/beamwind/blob/main/packages/play) - combining the [tailwind default theme](https://github.com/kenoxa/beamwind/blob/main/packages/preset-tailwind), the [semantic design system](https://github.com/kenoxa/beamwind/blob/main/packages/preset-system) and [preflight](https://github.com/kenoxa/beamwind/blob/main/packages/preflight) with [auto-conversion of unknown theme values](https://github.com/kenoxa/beamwind/blob/main/packages/preset-play)

> These packages all use [@beamwind/core](https://github.com/kenoxa/beamwind/blob/main/packages/core) under the hood which only has a minimal theme intended to be used as base to be further configured.

The [Instance Creation](#instance-creation) section show how to implement your own packages.

### Presets

> reusable configuration presets to create your own [instance](#instance-creation)

- [@beamwind/preset-tailwind](https://github.com/kenoxa/beamwind/blob/main/packages/preset-tailwind) - mirroring tailwind default theme
- [@beamwind/preset-system](https://github.com/kenoxa/beamwind/blob/main/packages/preset-system) - a semantic design system
- [@beamwind/preset-play](https://github.com/kenoxa/beamwind/blob/main/packages/preset-play) - auto-conversion of unknown theme values

### Base Styles

> opinionated base styles that are designed to smooth over cross-browser inconsistencies and make it easier to work within the constraints of your design system.

- [@beamwind/preflight](https://github.com/kenoxa/beamwind/blob/main/packages/preflight) - for modern browsers
- [@beamwind/reset](https://github.com/kenoxa/beamwind/blob/main/packages/reset) - for legacy browsers like IE10/11

### Helpers

- [@beamwind/colors](https://github.com/kenoxa/beamwind/blob/main/packages/colors) - color utilities

### Examples

- [svelte](https://github.com/kenoxa/beamwind/blob/main/examples/svelte) - using [svelte](https://svelte.dev/)

## Theming

> Customizing the default theme for your project.

The `theme` property of the `setup` options follows [Tailwinds Theme Configuration](https://tailwindcss.com/docs/theme) It contains keys for `screens`, `colors`, and `spacing`, as well as a key for each customizable core plugin. The [core theme](https://github.com/kenoxa/beamwind/blob/main/packages/core/src/theme.js) is bare bones as most projects have their own colors, sizes, ... and naming system. A tailwind like theme is available via [@beamwind/preset-tailwind](https://github.com/kenoxa/beamwind/blob/main/packages/preset-tailwind). For a full featured design system take a look at [@beamwind/preset-system](https://github.com/kenoxa/beamwind/blob/main/packages/preset-system).

> [API / Themes](https://beamwind.js.org/packages/types/interfaces/theme.html) provides an overview of all possible values and differences are highlighted [here](#tailwind-differences).

To customize the theme call `setup` with a `theme` property:

```js
import { setup } from 'beamwind'

setup({
  theme: {
    /* ... */
  },
})
```

If the new theme needs to access the existing theme a function can be used:

```js
setup({
  theme: (theme) => {
    return {
      extend: {
        colors: {
          important: theme('colors', 'critical'),
        },
      },
    }
  },
})
```

### Referencing other values

If you need to reference another value in your theme, you can do so by providing a closure instead of a static value. The closure will receive a [`theme()`](https://beamwind.js.org/packages/types/interfaces/themeresolver.html) function that you can use to look up other values in your theme.

```js
setup({
  theme: {
    colors: {
      important: (theme) => theme('colors', 'critical', 'red' /* Fallback */),
    },
    fill: (theme) => theme('colors'),
  },
})
```

### Colors

The `colors` key allows you to customize the global color palette for your project.

By default, these colors are inherited by all color-related core plugins, like `borderColor`, `divideColor`, `placeholderColor` and others.

Please note the following guidelines:

1. This is a flat object (`{ 'gray-50': '#f9fafb' }`) not a nested on like in tailwind (`{ 'gray': { 50: '#f9fafb' } }`) uses.
2. Colors should be in [#-hexadecimal notation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) (like `#RRGGBB` or `#RGB`) to work best with opacity plugins like `text-opacitiy` or `bg-opacitiy`.

#### "_On_" colors

> provide accessible contrast to their base color - `on-primary` or `on-surface`

Whenever elements, such as text or icons, appear in front of surfaces, those elements should use colors designed to be clear and legible against the colors behind them. When a color appears "_on_" top of a primary color, it’s called an "_on primary color_". They are labelled using the original color category (such as primary color) with the prefix `on-`.

"_On_" colors are primarily applied to text, iconography, and strokes. Sometimes, they are applied to surfaces.

> The `bg-<color>` directive adds a default `color` CSS declaration if a corresponding `on-*` color is found. The reverse works as well: `bg-on-<color>` adds `bg-<color>` as `color`. The `color` set in a way it can be overridden using `text-<color>` (see [Selector Ordering](#selector-ordering)).

## Plugins

Conceptual there are two kind of plugins:

1. Utilities: these may return a CSS rule object to be injected into the page (eq: `{ 'text-color': 'red' }`)
2. Components: these return directives which are resolved by utilities to their final class name (eq: `'bg-white text-red'`)

New plugins can be provided using the `setup` method. `setup` can be called multiple times where each call extends the existing configuration.

Plugins are searched for by name using the longest prefix before a dash (`"-"'`). The name and the remaining parts (splitted by a dash) are provided as first argument to the plugin function. For example if the directive is `bg-gradient-to-t` the following order applies:

| Plugin             | Parts                           |
| ------------------ | ------------------------------- |
| `bg-gradient-to-t` | `["bg-gradient-to-t"]`          |
| `bg-gradient-to`   | `["bg-gradient-to", "t"]`       |
| `bg-gradient`      | `["bg-gradient", "to", "t"]`    |
| `bg`               | `["bg", "gradient", "to", "t"]` |

### Adding New Utilities

Although beamwind provides a [pretty comprehensive set of utility classes](https://github.com/kenoxa/beamwind/blob/main/packages/core/src/plugins.ts) out of the box, you may run into situations where you need to add a few of your own.

Static utilities can be defined as CSS declaration objects:

```js
setup({
  plugins: {
    'text-important': { color: 'red' },
  },
})
```

Sometimes a pseudo class or child selector maybe required. In these case use an array where the first value is appended to the generated class name in the selector and the second value is CSS declaration object. The next example shows how this can be use to implement a [Stretched link](https://v5.getbootstrap.com/docs/5.0/helpers/stretched-link/):

```js
setup({
  plugins: {
    'stretched-link': [
      '::after',
      {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        'z-index': '1',
        content: '""',
      },
    ],
  },
})
```

Most utilities have some logic based on the directive value or need access to the current theme. For these case you can define a function which needs to return a CSS rule object, a decorator / rule tuple or a falsey value if it couldn't handle the provided directive parts.

> Dynamic plugins should be side-effect free and produce the same output given the same parameters.

Lets define a basic [scroll-snap](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type) utility. It should support these directives:

- `scroll-snap-none`
- `scroll-snap-x`
- `scroll-snap-y`

```js
setup({
  plugins: {
    // The directive splitted by '-' with the plugin name as first value: ['scroll-snap', ...]
    'scroll-snap': (parts) => {
      return { 'scroll-snap-type': parts[1] }
    },
  },
})
```

> As we are passing the second part through this additionally supports other values like `block`, `inline`, `both`, ...
> **Note**: This may lead to invalid css.

What this currently does not support is something like `scroll-snap-both-mandatory`. Lets fix that:

```js
// ... same as before
return { 'scroll-snap-type': parts.slice(1).join(' ') }
```

As this is quite common beamwind provides two helper ([join](https://beamwind.js.org/packages/core/modules.html#join) and [tail](https://beamwind.js.org/packages/core/modules.html#tail)) for this:

```js
import { join, tail } from 'beamwind'

// ... same as before
return { 'scroll-snap-type': join(tail(parts), ' ') }
```

As a second parameter the plugin function receives a [theme value accessor](https://beamwind.js.org/packages/types/interfaces/themevalueresolver.html). We can use that to access configured theme values. This allows to provide aliases for directive parts. Lets allow these directives:

- `scroll-snap` - using a default value
- `scroll-snap-proximity` - using a theme value

```js
setup({
  // Add a new theme section; Not needed if you are re-using existing theme sections
  theme: {
    scroll: {
      // eg: 'scroll-snap' => { scroll-snap-type: both; }
      DEFAULT: 'both',
      // eg: 'scroll-snap-proximity' => { scroll-snap-type: both proximity; }
      proximity: 'both proximity',
    }
  }

  plugins: {
    'scroll-snap': (parts, theme) => {
      // Omit the first element which is 'scroll-snap'
      return { 'scroll-snap-type': theme('scroll', tail(parts)) }
    }
  }
})
```

This will fail for unknown theme values. To support the previous directives like `scroll-snap-x` we need to mark the value resolution as optional and provide a fallback value:

```js
return {
  'scroll-snap-type': theme('scroll', tail(parts), true /* Optional */) || join(tail(parts), ' '),
}
```

> Responsive and state variants (like `hover`, `focus`, ...) are automatically applied. Opposed to tailwind there is no need to define which one should be applied.

_Optional_ Typescript does not recognize this new section. Using [module augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation) we can announce the new property:

```ts
declare module '@beamwind/types' {
  interface Theme {
    scroll: ThemeSection
  }
}
```

### Adding New Components

> Components define a set of utility directives that should be applied if the component directive is used.

Static components that are only a collection of utilities can be defined as strings. The following example allows to use `card` as a directive (`bw('card')`) which will be expanded to `max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl`:

```js
setup({
  plugins: {
    card: 'max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl',
  },
})
```

Dynamic components can be implemented as function which should return a string of directives to be applied.

```js
setup({
  plugins: {
    btn(parts) {
      if (parts[1]) {
        return `bg-${parts[1]} hover:bg-${parts[1]}-hover active:bg-${parts[1]}-active`
      }

      return 'font-bold py-2 px-4 rounded'
    },
  },
})
```

Some dynamic components depend on additional logic and like to use the familiar `bw` API. For these cases beamwind provides the [apply](https://beamwind.js.org/packages/core/modules.html#apply) helper, which has the same [API signature as `bw`](#function-signature).

```js
import { setup, apply } from 'beamwind'

setup({
  plugins: {
    btn(parts, theme) {
      if (parts[1]) {
        return apply`bg-${parts[1]} ${{ rounded: parts[1] === 'rounded }}`
      }

      return 'font-bold py-2 px-4 rounded'
    },
  },
})
```

> This is inspired by [@apply directive](https://tailwindcss.com/docs/functions-and-directives#apply) from Tailwind.

### Inline Plugins

A global plugin registry (per [beamwind instance](#instance-creation)) has it's downsides as each key/name must be unique. beamwind allows to define inline plugins ([API doc](https://beamwind.js.org/packages/types/modules.html#inlineplugin)) which are just like [normal plugins](#plugins) without the first parameter.

> Please take a look at [Plugin API documentation](#plugins) for further details about what a plugin can do.

```js
const card = (theme) => ({
  display: block
  border: `1px solid ${theme('colors', 'primary')}`,
  'text-align': 'center',
})

bw`font-bold ${card} text-primary`
// => font-bold __card_1 text-primary

bw('font-bold', card, 'text-primary')
// => font-bold __card_1 text-primary

// You can use variants
bw`sm:${card} text-primary`
// => font-bold sm:__card_1 text-primary

bw({ sm: card }, 'text-primary')
// => font-bold sm:__card_1 text-primary
```

> **Note**: This should be a last resort as it comes with a small performance penalty.

### Plugin Helper Functions

beamwind provides a small set of helper functions to write your own plugins:

- [apply](https://beamwind.js.org/packages/core/modules.html#apply)
- [corners](https://beamwind.js.org/packages/core/modules.html#corners)
- [edges](https://beamwind.js.org/packages/core/modules.html#edges)
- [expandEdges](https://beamwind.js.org/packages/core/modules.html#expandedges)
- [join](https://beamwind.js.org/packages/core/modules.html#join)
- [tail](https://beamwind.js.org/packages/core/modules.html#tail)

## [Configuration](https://beamwind.js.org/packages/types/interfaces/configurationoptions.html)

### Global Styles

Sometimes global CSS styles are required. beamwind support injection of CSS during the initialization using [`init`](https://beamwind.js.org/packages/types/interfaces/configurationoptions.html#init):

```js
setup({
  init(insert, theme) {
    insert(`body{margin:${theme.spacing.xl}}`)
  },
})
```

### Catching Errors

By default warnings about missing translations will be written to the console.

It is possible to make beamwind throw an error rather just [warn](https://beamwind.js.org/packages/core/modules.html#warn) by opting into _[strict](https://beamwind.js.org/packages/core/modules.html#strict)_ [`mode`](https://beamwind.js.org/packages/types/interfaces/configurationoptions.html#mode):

```js
import { strict } from 'beamwind'

setup({ mode: strict })
```

To fully customize the error handling you can provide a `warn` function:

```js
import { mode } from 'beamwind'

setup({
  mode: mode((message) => {
    /* ... */
  }),
})
```

> The exports `warn`, `strict` and `mode` exports are re-exported by all packages.

For advanced use case you can implement your own [mode](https://beamwind.js.org/packages/types/interfaces/mode.html):

```js
import { mode } from 'beamwind'

setup({
  mode: {
    unknown(section, keypath, optional, theme) {
      /* ... */
    },
    warn(message, directive) {
      /* ... */
    },
  },
})
```

> For an example see [@beamwind/preset-play](https://github.com/kenoxa/beamwind/blob/main/packages/preset-play).

### Autoprefix

A custom auto-prefixer method may be used as a replacement for the built-in [tiny-css-prefixer](https://github.com/kitten/tiny-css-prefixer):

```js
import { prefix as stylisPrefix } from 'stylis' // v4

setup({
  // A custom solution which weighs more than the default
  prefix: (property, value) => stylisPrefix(`${property}:${value};`, property.length).slice(0, -1),
})
```

### Hashed Class Names

beamwind uses hashed class names (like `_1m4vcp0`) by default. During development or testing it maybe useful to use readable class names:

```js
setup({ hash: false })
```

Alternatively a custom hash function can be provided:

```js
import hash from '@emotion/hash'

setup({ hash: (string) => '_' + hash(string) })
```

### Injector

An injector is responsible for adding a CSS rule to its underlying target.

During testing or server-side rendering the `virtualInjector` should be used:

```js
import { virtualInjector } from 'beamwind'

const injector = virtualInjector()
setup({ injector })

injector.target // Array with sorted CSS rulesText
```

### Instance creation

There are some case where you need to create separate [instance](https://beamwind.js.org/packages/types/interfaces/instance.html) of beamwind:

- for reduced bundle size by using a own preset
- IE11 support using [reset](https://github.com/kenoxa/beamwind/blob/main/packages/reset)

Basically you need to do the following:

```js
// Choose either reset or preflight
import preflight from '@beamwind/preflight'
import { createInstance } from '@beamwind/core'

import yourTheme from './your-theme'

export const { bw, setup, theme } = createInstance([preflight(), yourTheme])
```

> You can use one of the existing [packages](#packages) as a template.

#### Multiple Browsing Contexts

Creating a own beamwind instance is required if you want to manage styles of multiple browsing contexts (e.g. an `<iframe>` besides the main document).

```js
import { createInstance, cssomInjector } from 'beamwind'

const iframeDocument = document.getElementsByTagName('iframe')[0].contentDocument

export const { bw } = createInstance({
  injector: cssomInjector({
    // Make sure this node exists or create it on the fly if necessary
    target: iframeDocument.getElementById('__beamwind'),
  }),
})
```

> This option should be used along with a custom target for injection.

### Server-side rendering (SSR)

Beamwind supports SSR. Consider the following example:

```js
import { h } from 'preact'
import render from 'preact-render-to-string'
import htm from 'htm'
import { createInstance, virtualInjector } from 'beamwind'
import { getStyleTag } from '@beamwind/ssr'

const injector = virtualInjector()
const bw = createInstance({ injector })

const html = htm.bind(h)
const style = {
  main: bw`clearfix`,
}

const app = html`<main className=${style.main}>hello beamwind</main>`
const appHtml = render(app)
const styleTag = getStyleTag(injector)

// Inject styleTag to your HTML now.
```

### nonce

In order to prevent harmful code injection on the web, a [Content Security Policy (CSP)](https://developer.mozilla.org/docs/Web/HTTP/CSP) may be put in place. During server-side rendering, a cryptographic nonce (number used once) may be embedded when generating a page on demand:

```js
import { virtualInjector } from 'beamwind'

// Usage with webpack: https://webpack.js.org/guides/csp/
const injector = virtualInjector({ nonce: __webpack_nonce__ })
```

The same nonce parameter should be supplied to the client-side:

```js
import { setup } from 'beamwind'

setup({ nonce: __webpack_nonce__ })
```

### target

Changes the destination of the injected rules. By default, a `<style id="__beamwind"> element in the `<head>` during runtime, which gets created if unavailable.

## Selector Ordering

> This section describes the internal ordering of the generated CSS rules. _beamwind takes care of this_

beamwind creates, except for a few exceptions, one CSS rule with a single class as selector per directive. This means thy have all the same specificity.

> If two declarations have the same weight, origin, and specificity, the latter specified wins.

Some directives depend on each other. For example the [`via-<color>`](https://tailwindcss.com/docs/gradient-color-stops#middle-color) must be declared after the [`from-<color>`](https://tailwindcss.com/docs/gradient-color-stops#from-color) directive. As a result beamwind has to ensure that all CSS rules are in a specific order.

The following rules apply in deterministically sort the injected CSS rules:

- media queries are sorted in a mobile first manner using the `min-width` value
- other at-rules - based on `-:;,#(` counting
- pseudo classes and variants are sorted in the following order: `first`, `last`, `odd`, `even`, `link`, `visited`, `empty`, `checked`, `group-hover`, `group-focus`, `focus-within`, `hover`, `focus`, `focus-visible`, `active`, `disabled`, others - meaning that `active` overrides `focus` and `hover` for example (see [When do the :hover, :focus, and :active pseudo-classes apply?](https://bitsofco.de/when-do-the-hover-focus-and-active-pseudo-classes-apply/#orderofstyleshoverthenfocusthenactive)
- number of declarations (descending) - this allows single declaration styles to overwrite styles from multi declaration styles
- greatest precedence of properties (ignoring vendor prefixed and custom properties) based on `-` counting - shorthand properties are inserted first eg longhand properties override shorthands.
- greatest precedence of values based on counting `-:;,#(`

## Roadmap

TODO see TODO.md

## Tailwind Differences

- beamwind is compatible with Tailwind v1 for IE11 support - but trys to integrate new v2 features
- beamwind supports [variant](#variant-grouping) and [directive](#directive-grouping) grouping to reduce the overwhelming maze Tailwind sometimes creates
- beamwind theme has a slightly different format:
  - `colors` is [flat-object](#colors)
  - `fontFamily`s are strings
  - `animation` additionally accepts a [tuple form](https://beamwind.js.org/packages/types/modules.html#themeanimation) to infer the key within [keyframes](https://beamwind.js.org/packages/types/interfaces/theme.html#keyframes) which waypoints should be injected
  - values maybe [theme resolvers](#referencing-other-values)
- beamwind supports [_"on"_ colors](#on-colors)
- beamwind automatically infers negated values - they do _not_ need to be in the theme config

### Missing Features

The following Tailwind v2 features are not yet available in beamwind:

- dark mode
- space-x-reverse
- divide-y-reverse
- [Font Variant Numeric](https://tailwindcss.com/docs/font-variant-numeric)

> Did we miss a feature? Please [open a an issue](https://github.com/kenoxa/beamwind/issues/new) or [contribute](#contribute) a pull request.

### Additional Features

- `d-*`: allows to set the `display` property (from [bootstrap](https://v5.getbootstrap.com/docs/5.0/utilities/display/))
- `appearance-*`: supports [all values](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance)
- `bg-<color>`: if a "_on_" color) (`on-<color>`) is found it is used as default CSS `color`; to change to a different color use `text-<color>` (tailwind style)
- `underline`, `text-no-underline`, `text-line-through`, `text-uppercase`, `text-lowercase` and `text-capitalize`: this allows grouping of text directives like `text(lg red-500 capitalize underline)`
- `font-italic` and `font-no-italic`: this allows grouping of font directives like `font(sans italic bold)`
- `border` and `divide` allow to combine positions (`t`op, `r`righ, `l`eft, `b`ottom)

  - `tr` - `top` & `right`
  - `brl` - `bottom`, `right` and `left`

  > **Note** `x` and `y` can not be combined.

- `rotate`, `scale` , `skew` and `translate` can be used without `transform` when used alone

  > `rotate-45` works but when using `rotate-45 scale-150` only one of both is applied. In that case you must use `transform`: `transform rotate-45 scale-150`

## Oceanwind Differences

> All [Tailwind Differences](#tailwind-differences) apply as well.

This library is heavily inspired and based on [oceanwind]. Without the work of [Luke Jackson](https://github.com/lukejacksonn) this would not have been possible! He wrote a great [blog post](http://blog.lukejacksonn.com/oceanwind) about the development of oceanwind.

Some notable differences are:

- beamwind does not generate strictly atomic CSS

  Some tailwind classes like [font-size](https://tailwindcss.com/docs/font-size) are comprised of several CSS declarations.
  They must be in one CSS declaration block to be overridden by single CSS declarations liken [line-heigth](https://tailwindcss.com/docs/line-height).

- beamwind API [additionally supports](#function-signature)

  - variadic arguments like `bw('bg-blue', 'text-white')`
  - [Directive Grouping](#directive-grouping)
  - Tagged Template Interpolation values may additionally be Array, Object or Function ([inline plugins](#inline-plugins))
  - Object values which are String, Array or Object start a new variant group
  - support for [inline plugins](#inline-plugins)

- beamwind allows to define new plugins (see [Plugins](#plugins))
- beamwind allows to generate [readable class names](#hashed-class-names)
- beamwind adheres to the pseudo class and variant order as used by tailwind
- beamwind uses [`calc()`](<https://developer.mozilla.org/en-US/docs/Web/CSS/calc()>) to negate values - this allows to use complex expression as theme values
- beamwind supports additional tailwind features like

  - [animation](https://tailwindcss.com/docs/animation)
  - [group-hover](https://tailwindcss.com/docs/hover-focus-and-other-states#group-hover)
  - [group-focus](https://tailwindcss.com/docs/hover-focus-and-other-states#group-focus)
  - [font-size with default line-height](https://tailwindcss.com/docs/font-size#providing-a-default-line-height)
  - [font-size with default letter-spacing](https://tailwindcss.com/docs/font-size#providing-a-default-letter-spacing)
  - [overflow-ellipsis](https://tailwindcss.com/docs/text-overflow#overflow-ellipsis)
  - [overflow-clip](https://tailwindcss.com/docs/text-overflow#overflow-clip)
  - [transition](https://tailwindcss.com/docs/transition-property) with default timing function and duration
  - [animate](https://tailwindcss.com/docs/animate)
  - [transform](https://tailwindcss.com/docs/transform)
  - [Background Image](https://tailwindcss.com/docs/background-image)
  - [Gradient Color Stops](https://tailwindcss.com/docs/gradient-color-stops)
  - [ring](https://tailwindcss.com/docs/ring-width)
  - [auto-cols-\*](https://tailwindcss.com/docs/grid-auto-columns) and [auto-rows-\*](https://tailwindcss.com/docs/grid-auto-rows)

- oceanwind supports duplicate directives tracking
- beamwind is 7-10 times faster than oceanwind (see [Benchmarks](https://github.com/kenoxa/beamwind/blob/main/benchmarks))

### Size Comparison

| &nbsp;   | [oceanwind](<(https://bundlephobia.com/result?p=oceanwind)>)                                                                     | [beamwind](<(https://bundlephobia.com/result?p=@beamwind/core)>)                                                                          |
| -------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| minified | [![Oceanwind Minified](https://flat.badgen.net/bundlephobia/min/oceanwind?label)](https://bundlephobia.com/result?p=oceanwind)   | [![Beamwind Minified](https://flat.badgen.net/bundlephobia/min/@beamwind/core?label)](https://bundlephobia.com/result?p=@beamwind/core)   |
| gzipped  | [![Oceanwind Gzipped](https://flat.badgen.net/bundlephobia/minzip/oceanwind?label)](https://bundlephobia.com/result?p=oceanwind) | [![Beamwind Gzipped](https://flat.badgen.net/bundlephobia/minzip/@beamwind/core?label)](https://bundlephobia.com/result?p=@beamwind/core) |

## Compatibility

All versions of Node.js are supported.

All browsers that support [Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#Browser_compatibility) and [Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys#Browser_compatibility) are supported (IE9+).

## Acknowledgements

Without these libraries and their authors this would not have been possible:

- [Tailwind CSS]
- [Oceanwind]
- [Otion]
- [cslx](https://www.npmjs.com/package/cslx)
- [Braid Design System](https://seek-oss.github.io/braid-design-system)

## Contribute

Thanks for being willing to contribute!

> This project is free and open-source, so if you think this project can help you or anyone else, you may [star it on GitHub](https://github.com/kenoxa/beamwind). Feel free to [open an issue](https://github.com/beamwind/beamwind/issues) if you have any idea, question, or you've found a bug.

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

We are following the [Conventional Commits](https://www.conventionalcommits.org) convention.

### Develop

Clone the repository and cd into the project directory.

Run `yarn install && yarn build`.

Cd into the package that you'd like to make progress on.

- `yarn test`: Run test suite including linting
- `yarn format`: Ensure consistent code style
- `yarn build`: Build all packages
- `yarn publish`: To publish all changed packages

### Sponsors

[![Kenoxa GmbH](https://images.opencollective.com/kenoxa/9c25796/logo/68.png)](https://www.kenoxa.com) [Kenoxa GmbH](https://www.kenoxa.com)

## License

[MIT](https://github.com/kenoxa/beamwind/blob/main/LICENSE) © [Kenoxa GmbH](https://kenoxa.com)

[tailwind css]: https://tailwindcss.com
[oceanwind]: https://www.npmjs.com/package/oceanwind
[otion]: https://www.npmjs.com/package/otion
