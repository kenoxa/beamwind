# beamwind

> compiles [Tailwind CSS] like shorthand syntax into CSS at runtime

[![License](https://flat.badgen.net/github/license/kenoxa/beamwind)](https://github.com/kenoxa/beamwind/blob/main/LICENSE)
[![Latest Release](https://flat.badgen.net/npm/v/beamwind?label=release)](https://www.npmjs.com/package/beamwind)
[![Bundle Size](https://flat.badgen.net/bundlephobia/minzip/beamwind?icon=packagephobia&label&color=blue)](https://bundlephobia.com/result?p=beamwind)
[![Typescript](https://flat.badgen.net/badge/icon/included?icon=typescript&label)](https://unpkg.com/browse/beamwind/dist/index.d.ts)
[![Sponsor](https://flat.badgen.net/badge/sponsored%20by/Kenoxa/2980b9)](https://www.kenoxa.com)

This library takes inspiration from [Tailwind CSS] ([see differences](#tailwind-differences)), [Oceanwind] ([see differences](#oceanwind-differences)), [Otion] and [others](#acknowledgements) to provide means of efficiently generating mostly atomic styles from shorthand syntax and appending them to the DOM at runtime.

## Backstory

Design systems embrace a component-oriented mindset. Inspired by [Tailwind CSS], utility classes provide reusable styles with no unwanted side-effects. However, they have to be generated upfront.

Atomicity generalizes the former concept by instantiating style rules on demand. Serving as a solid foundation for constraint-based layouts, [atomic CSS-in-JS](https://sebastienlorber.com/atomic-css-in-js) has come to fluorish at scale.

## Key Features

- 📖 Supports vast majority of Tailwind shorthand syntax outlined [in the docs](https://tailwindcss.com/docs) ([see differences](#tailwind-differences))
- 🗜 Is smaller than the average purged css file output from the Tailwind compiler
- 💡 Generates only the styles required without building or purging
- 🚀 Styles co-located with your component reduces context switching
- 🧹 [Variant](#variant-grouping) and [Directive](#directive-grouping) grouping to reduce the overwhelming maze Tailwind sometimes creates
- 🍱 [Reliable selector ordering](#selector-ordering)
- 🧱 [Extendable with plugins](#plugins)
- 🐾 Negligible runtime footprint
- ⏱ Performant runtime characteristics
- 💫 Works without a framework - eg framework agnostic
- ⚠️ Warns the developer when unrecognized shorthand is used

Here is a quick example:

```jsx
// Load an opinionated set of base styles for Tailwind projects.
// If you need to support IE 11 use @beamwind/reset
import preflight from 'https://unpkg.com/@beamwind/preflight'
import { bw, setup } from 'https://unpkg.com/beamwind'

setup(preflight)

<div class={bw`flex space(x y)`}>
  <div class={bw`w-1/3`}><!-- ... --></div>
  <div class={bw`w-1/3`}><!-- ... --></div>
  <div class={bw`w-1/3`}><!-- ... --></div>
</div>
```

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Usage](#usage)
- [Theming](#theming)
- [Plugins](#plugins)
- [API](#api)
- [Selector Ordering](#selector-ordering)
- [Roadmap](#roadmap)
- [Tailwind Differences](#tailwind-differences)
- [Oceanwind Differences](#oceanwind-differences)
- [Support](#support)
- [Acknowledgements](#acknowledgements)
- [Support](#support-1)
- [Contribute](#contribute)
- [Sponsors](#sponsors)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

## Installation

```sh
npm install beamwind
```

And then import it:

```js
import { bw } from 'beamwind'
```

## Usage

To use the library, first import the module then invoke the `bw` export using tagged template syntax:

```js
import { bw } from 'https://unpkg.com/beamwind'
document.body.className = bw`h-full bg-purple-500 rotate-3 scale-95`
```

Running the above code will result in the following happening:

1. Parse tokens (`h-full`, `bg-purple-500`, `rotate-3`, `scale-95`)
2. Token shorthand syntax will be translated into CSS declarations (e.g. `h-full -> { height: 100vh }`).
3. Inject each token CSS declarations with a unique class name into a library-managed style sheet
4. Return a space-separated string of unique class names

It is recommended to import the following css files which help normalize styles across browsers:

- The Tailwind reset [available here](https://unpkg.com/tailwindcss/dist/base.min.css)
- The Tailwind prose helper [available here](https://unpkg.com/@tailwindcss/typography/dist/typography.min.css)

### Extending the default theme

Importing and invoking beamwind directly will cause it to use
[default theme](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/theme.js)
for directives that require themed values (like `bg-primary` for example).

> The [Theming section](#theming) provides detailed insight into the theming options.

To customize the theme, use the `setup` export. This will change the theme used by the `bw` export.

```js
import { bw, setup } from 'beamwind'

setup({
  theme: {
    colors: {
      'red-500': 'hotpink',
    },
  },
})

bw`bg-red-500` // will result in a hotpink background-color
```

> `setup` can be called multiple times where each call extends the existing configuration.
> The `theme` and `plugins` properties merge their values with the previous ones.

Alternatively you can create a own instance:

```js
import { createInstance } from 'beamwind'

const css = createInstance({
  colors: {
    'red-500': 'hotpink',
  },
})

css`bg-red-500` // will result in a hotpink background-color
```

> Any custom theme will be deep merged with the default theme.

### Function Signature

It is possible to invoke beamwind in a multitude of different ways. The `bw` function can take **_any_** number of arguments, each of which can be an Object, Array, Boolean, Number, String or [inline plugins](#inline-plugins). This feature is based on [clsx](https://www.npmjs.com/package/cslx).

> **Important**: _Any_ falsey values are discarded!
> Standalone Boolean values are discarded as well.

For example:

```js
// Tag Template Literal (falsey interpolations will be omitted)
bw`bg-primary rounded`
//=> 'bg-primary rounded'

bw`bg-primary ${false && 'rounded'}`
//=> 'bg-primary'

bw`bg-primary ${[false && 'rounded', 'block']}`
//=> 'bg-primary block'

bw`bg-primary ${{ rounded: false, 'text-underline': isTrue() }}`
//=> 'bg-primary text-underline'

// Strings (variadic)
bw('bg-primary', true && 'rounded', 'text-underline')
//=> 'bg-primary rounded text-underline'

// Objects (keys with falsey values will be omitted)
bw({ 'bg-primary': true, rounded: false, 'text-underline': isTrue() })
//=> 'bg-primary text-underline'

// Objects (variadic)
bw({ 'bg-primary': true }, { rounded: false }, null, { 'text-underline': true })
//=> 'bg-primary text-underline'

// Arrays (falsey items will be omitted)
bw(['bg-primary', 0, false, 'rounded'])
//=> 'bg-primary rounded'

// Arrays (variadic)
bw(['bg-primary'], ['', 0, false, 'rounded'], [['text-underline', [['text-lg'], 'block']]])
//=> 'bg-primary rounded text-underline text-lg block'

// Kitchen sink (with nesting)
bw(
  'bg-primary',
  [1 && 'rounded', { underline: false, 'color-secondary': null }, ['text-lg', ['shadow-lg']]],
  'uppercase',
)
//=> 'bg-primary rounded text-lg shadow-lg uppercase'
```

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
bw`text(center underline bold primary)`)
// => text-center text-underline text-bold text-primary
```

Some directives like [ring](https://tailwindcss.com/docs/ring-width) need to be applied as is. For that case you can use the special `&` directive which is replaced with the current prefix:

```js
bw`ring(& promote offset(sm on-promote))`)
// => ring ring-promote ring-offset-sm ring-offset-on-promote
```

### Inline Plugins

A global plugin registry (per instance) has it's downsides as each key/name must be unique. beamwind allows to define inline plugins which are just like [normal plugins](#plugins) without the first parameter.

> Please take a look at [Plugin API documentation](#plugins) for further details about what a plugin can do.

```js
const header = (theme) => ({
  disply: block
  border: `1px solid ${theme('colors', 'primary')}`,
  'text-align': 'center',
})

bw`font-bold ${card} color-primary`
// Note: Same works for arrays and objects

// You can use variants
bw`sm:${card} color-primary`
// Same works for arrays and objects
```

> **Note**: This should be a last resort as it comes with a small performance penalty.

### Class Name Factories

Often you will find yourself in a position to need an abstraction to simplify the creation of tokens. A common best practice is to create a function that returns the required tokens:

```js
const btn = (color) => {
  if (color) {
    return `bg-${color} text-${color}-contrast hover:bg-${color}-hover active:bg-${color}-active`
  }

  return 'inline-block font-bold py-2 px-4 rounded'
}

bw(btn())
// => inline-block font-bold py-2 px-4 rounded

bw([btn(), btn('primary')])
// => inline-block font-bold py-2 px-4 rounded bg-primary text-primary-contrast hover:bg-primary-hover active:bg-primary-active
```

> This can be converted into a [component plugin](#adding-new-components).

## Theming

beamwind tries to follow a semantic naming approach by using a common _language_ to reduce the guess work. A small set of well known design tokens hopefully prevents magic values or ambiguous names.

The theme object contains keys for `screens`, `colors`, and `spacing`, as well as a key for each customizable core plugin. The [default theme](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/theme.js) shows most of the available values. A tailwind like theme is available via [@beamwind/preset-tailwind](https://www.npmjs.com/package/@beamwind/preset-tailwind). For a full featured design system take a look at [@beamwind/preset-semantic](https://www.npmjs.com/package/@beamwind/preset-semantic).

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
import { setup } from 'beamwind'

setup({
  theme: (theme) => {
    return {
      colors: {
        important: theme.colors.critical,
      },
    }
  },
})
```

### Screens

The `screens` key allows you to customize the responsive breakpoints in your project.

```js
theme = {
  screens: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    '2xl': '1536px',
  },
}
```

### Colors

The `colors` key allows you to customize the global color palette for your project.

By default, these colors are inherited by all color-related core plugins, like `borderColor`, `divideColor`, `placeholderColor` and others.

> **Note** This is a flat object (`{ 'gray-50': '#f9fafb' }`) not a nested on like in tailwind ((`{ 'gray': { 50: '#f9fafb' } }`)) uses.

Most color directives accept color names (`text-rebeccapurple`) and hex colors (`text-#009900`) if the color is not found in `theme.colors`. This feature should be used for prototyping only as it usually prevents a consistent UI experience.

Out-of-the-box beamwind provides only a few colors that follow the [semantic color system](https://github.com/kenoxa/beamwind/blob/main/packages/preset-semantic/README.md#colors) and are based on [Braid Design System / Tones](https://seek-oss.github.io/braid-design-system/foundations/tones). [@beamwind/preset-tailwind](https://www.npmjs.com/package/@beamwind/preset-tailwind) provides the full tailwind color palette.

```js
theme = {
  colors: {
    current: 'currentColor',
    transparent: 'transparent',
    none: 'transparent',

    surface: '#fff',
    'on-surface': '#111',

    // https://seek-oss.github.io/braid-design-system/foundations/tones/
    primary: '#0d3880',
    'on-primary': '#e8ecf4',

    secondary: '#e60278',
    'on-secondary': '#000',

    caution: '#ffc600',
    'on-caution': '#1A202C',

    critical: '#d0011b',
    'on-critical': '#f4e4e6',

    info: '#1e468c',
    'on-info': '#e8ecf2',

    neutral: '#596581',
    'on-neutral': '#eaebed',

    positive: '#138a08',
    'on-positive': '#000',

    promote: '#9556b7',
    'on-promote': '#f7f5f9',
  },
}
```

#### Color Names

Naming colors is one of the most challenging parts of a color system. Many systems try to map color tones to their relative lightness, but this can be problematic because it creates a very loose mental model. Other systems will try to name colors based on use or hierarchy and those are equally problematic.

Most design systems have their own color naming scheme. beamwind does not enforce a particular scheme. With [@beamwind/preset-tailwind](https://www.npmjs.com/package/@beamwind/preset-tailwind) and [@beamwind/preset-semantic](https://www.npmjs.com/package/@beamwind/preset-semantic) two different approaches are available.

- `surface` - affect surfaces of components, such as cards, sheets, and menus
- `primary` - is the color displayed most frequently across screens and components
- `secondary` - provides more ways to accent and distinguish certain screens and component parts
- `critical` - Super important. You need to see this.
- `caution` - You should be aware something is happening or mid-way through a process. Could be a risk or an item that needs to be acted upon.
- `positive` - Good vibes & new things! Wants to get the user to act on something or be aware something good happened.
- `neutral` - Subtle information or details historic in nature. Often already actioned & in the past. No priority required due to the lack of importance or change.
- `info` - Guidance & advice. Generally from the UI or business. Functional, calm and non urgent.
- `promote` - Things we wish to make prominent and give more visibility to. Typically used to highlight features, updates or marketing messages.

#### "_On_" colors

> provide accessible contrast to their base color - `on-primary` or `on-surface`

Whenever elements, such as text or icons, appear in front of surfaces, those elements should use colors designed to be clear and legible against the colors behind them. When a color appears "_on_" top of a primary color, it’s called an "_on primary color_". They are labelled using the original color category (such as primary color) with the prefix `on-`.

"_On_" colors are primarily applied to text, iconography, and strokes. Sometimes, they are applied to surfaces.

> The `bg-<color>` directive adds a default `color` CSS declaration if a corresponding `on-*` color is found. The reverse works as well: `bg-on-<color>` adds `bg-<color>` as `color`. The `color` set this way can be overridden using `text-<color>` (see [Selector Ordering](#selector-ordering)).

### Spacing

The `spacing` key allows you to customize the global spacing scale for your project.

```js
theme = {
  spacing: {
    none: '0',
    0: '0',
    px: '1px',
    auto: 'auto',
    full: '100%',
    base: '.625rem',
    xs: '.25rem',
    sm: '.5rem',
    md: '.875rem',
    lg: '1rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '4rem',
    '5xl': '5rem',
    '6xl': '6rem',
  },
}
```

By default, these values are inherited by the `padding`, `margin`, `width`, `height`, `maxHeight`, `gap`, `inset`, `space`, and `translate` core plugins.

Most tailwind classes use a deterministic number calculation scheme (for example [width](https://tailwindcss.com/docs/width)). If beamwind detects a number in a token and there is not mapped value in the theme it uses the following algorithm to generate a CSS value:

- decimal numbers (`2` or `1.5`) are divided by a divisor and `rem` is used as a unit (`w-2.5` becomes `width: 0.625rem;`)
- fractions (`1/6` or `3/5`) are evaluated and `%` is used as a unit (`w-4/5` becomes `width: 80%;`)

> Non number-like values are used as is and may result in invalid CSS values.

### Sizes

The `sizes` key allows you to customize the global sizing scale for your project.

```js
theme = {
  sizes: {
    none: '0',
    0: '0',
    px: '1px',
    auto: 'auto',
    full: '100%',
    min: 'min-content',
    max: 'max-content',
    prose: '65ch',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    // The screen-\* properties are auto generated from all keys in `screens`
    'screen-sm': '576px',
    'screen-md': '768px',
    'screen-lg': '992px',
    'screen-xl': '1200px',
    'screen-2xl': '1536px',
  },
}
```

### Font Sizes

If you also want to provide a default `line-height` and/or `letter-spacing` value for a font size, you can do so using a tuple of the form `[fontSize, { letterSpacing, lineHeight }]`.

## Plugins

Conceptual there are two kind of plugins:

1. Utilities: these may return a CSS declaration object to be injected into the page (eq: `{ 'text-color': 'red' }`)
2. Components: these return tokens which are resolved by utilities to their final class name (eq: `'bg-white text-red'`)

New plugins can be provided using the `setup` method. `setup` can be called multiple times where each call extends the existing configuration.

Plugins are searched for by name using the longest prefix before a dash (`"-"'). The name and the remaining parts (splitted by a dash) are provided as first argument to the plugin function. For example if the token is `bg-gradient-to-t` the following order applies:

| Plugin             | Parts                           |
| ------------------ | ------------------------------- |
| `bg-gradient-to-t` | `["bg-gradient-to-t"]`          |
| `bg-gradient-to`   | `["bg-gradient-to", "t"]`       |
| `bg-gradient`      | `["bg-gradient", "to", "t"]`    |
| `bg`               | `["bg", "gradient", "to", "t"]` |

### Adding New Utilities

Although beamwind provides a [pretty comprehensive set of utility classes](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/src/plugins.ts) out of the box, you may run into situations where you need to add a few of your own.

Static utilities can be defined as CSS declaration objects:

```js
import { setup } from 'beamwind'

setup({
  plugin: {
    'text-important': { color: 'red' },
  },
})
```

Sometimes a pseudo class or child selector maybe required. In these case use an array where the first value is appended to the generated class name in the selector and the second value is CSS declaration object. The next example shows how this can be use to implement a [Stretched link](https://v5.getbootstrap.com/docs/5.0/helpers/stretched-link/):

```js
import { setup } from 'beamwind'

setup({
  plugin: {
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

Most utilities have some logic based on the token value or need access to the current theme. For these case you can define a function which needs to return a CSS declaration object, a suffix/declaration tuple or a falsey value if it couldn't handle the provided token parts.

Lets define a basic [scroll-snap](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type) utility. It should support these tokens: `scroll-snap-none`, `scroll-snap-x` and `scroll-snap-y`

```js
import { setup } from 'beamwind'

setup({
  plugins: {
    // The token splitted by '-' with the plugin name as first value: ['scroll-snap', ...]
    'scroll-snap'(parts) {
        return { 'scroll-snap-type': parts[1] }
      }
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

As this is quite common beamwind provides two helper ([join](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/docs/modules/_util_.md#join) and [tail](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/docs/modules/_util_.md#tail)) for this:

```js
import { setup, join, tail } from 'beamwind'

// ... same as before
return { 'scroll-snap-type': join(tail(parts), ' ') }
```

As a second parameter the plugin function receives a theme value accessor. We can use that to access configured theme values. This allows to provide aliases for token parts. Lets allow these tokens: `scroll-snap` (using a default value) and `scroll-snap-proximity` (using a theme value)

```js
import { setup, defaultToKey } from 'beamwind'

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

  plugin: {
    'scroll-snap'(parts, theme) {
      // defaultToKey: if no theme value is found -> use the provided key (value of parts.slice(1).join(' '))
      return { 'scroll-snap-type': theme('scroll', parts.slice(1).join(' '), defaultToKey }
    }
  }
})
```

> Responsive and state variants (like `hover`, `focus`, ...) are automatically applied. Opposed to tailwind there is no need to define which one should be applied.

### Adding New Components

> Components define a set of utility tokens that should be applied if the component token is used.

Static components that are only a collection of utilities can be defined as strings. The following example allows to use `card` as a token (`bw('card')`) which will be expanded to `max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl`:

```js
import { setup } from 'beamwind'

setup({
  plugin: {
    card: 'max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl',
  },
})
```

Dynamic components can be implemented as function which should return a string of tokens to be applied.

```js
import { setup } from 'beamwind'

setup({
  plugin: {
    btn(parts) {
      if (parts[1]) {
        return `bg-${parts[1]} text-${parts[1]}-contrast hover:bg-${parts[1]}-hover active:bg-${parts[1]}-active`
      }

      return 'font-bold py-2 px-4 rounded'
    },
  },
})
```

Some dynamic components depend on additional logic and like to use the familiar `bw` API. For these case beamwind provides the [apply](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/docs/modules/_helpers_.md#apply) helper, which has the same API signature as `bw`.

```js
import { setup, apply, optional } from 'beamwind'

setup({
  plugin: {
    btn(parts, theme) {
      if (parts[1]) {
        return apply`bg-${parts[1]} text-${parts[1]}-contrast ${{rounded: !!theme('btn', 'rounded', optional}}`
      } else {
        return 'font-bold py-2 px-4 rounded'
      }
    }
  },
})
```

### Plugin Helper Functions

beamwind provides a small set of helper functions to write your own plugins:

- [apply](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/docs/modules/_helpers_.md#apply)
- [compose](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/docs/modules/_helpers_.md#compose)
- [convertTo](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/docs/modules/_helpers_.md#convertto)
- [corners](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/docs/modules/_helpers_.md#corners)
- [defaultToKey](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/docs/modules/_helpers_.md#defaulttokey)
- [divideBy](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/docs/modules/_helpers_.md#divideby)
- [edges](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/docs/modules/_helpers_.md#edges)
- [join](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/docs/modules/_util_.md#join)
- [optional](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/docs/modules/_helpers_.md#optional)
- [tail](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/docs/modules/_util_.md#tail)

## [API](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/docs/README.md)

### Global Styles

Sometimes global CSS styles are required. beamwind support injection of CSS during the initialization:

```js
import { setup } from 'beamwind'

setup({
  init(insert, theme) {
    insert(`body{margin:${theme.spacing.xl}}`)
  },
})
```

### Catching Errors

By default warnings about missing translations will be written to the console.

It is possible to make beamwind throw an error rather just warn by opting into _strict_ mode:

```js
import { setup, fail } from 'beamwind'

setup({ warn: fail })
```

To fully customize the error handling you can provide a `warn` function:

```js
setup({
  warn: (message, token) => {
    /* ... */
  },
})
```

### Autoprefix

A custom auto-prefixer method may be used as a replacement for the built-in [tiny-css-prefixer](https://github.com/kitten/tiny-css-prefixer):

```js
import { setup } from 'beamwind'
import { prefix as stylisPrefix } from 'stylis' // v4

setup({
  // A custom solution which weighs more than the default
  prefix: (property, value) => stylisPrefix(`${property}:${value};`, property.length).slice(0, -1),
})
```

### Hashed Class Names

beamwind uses hashed class names (like `_1m4vcp0`) by default. During development or testing it maybe useful to use readable class names:

```js
import { setup } from 'beamwind'

setup({ hash: false })
```

Alternatively a custom hash function can be provided:

```js
import { setup } from 'beamwind'
import hash from '@emotion/hash'

setup({ hash: (string) => '_' + hash(string) })
```

### Injector

An injector is responsible for adding a CSS rule to its underlying target.

During testing or server-side rendering the `virtualInjector` should be used:

```js
import { setup, virtualInjector } from 'beamwind'

const injector = virtualInjector()
setup({ injector })

injector.target // Array with sorted CSS rulesText
```

### Instance creation

Separate instances of beamwind are necessary when managing styles of multiple browsing contexts (e.g. an `<iframe>` besides the main document). This option should be used along with a custom target for injection:

```js
import { createInstance, cssomInjector } from 'beamwind'

const iframeDocument = document.getElementsByTagName('iframe')[0].contentDocument

export const { bw } = createInstance({
  injector: cssomInjector({
    // Make sure this node exists or create it on the fly if necessary
    target: iframeDocument.getElementById('beamwind'),
  }),
})
```

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

To make sure that styles are resolved deterministically the following rules apply in order:

- media queries are sorted in a mobile first manner using the `min-width` value
- other at-rules - based on `-:;,#(` counting
- pseudo classes and variants are sorted in the following order: `first`, `last`, `odd`, `even`, `link`, `visited`, `empty`, `checked`, `group-hover`, `group-focus`, `focus-within`, `hover`, `focus`, `focus-visible`, `active`, `disabled`, others - meaning that `active` overrides `focus` and `hover` for example (see [When do the :hover, :focus, and :active pseudo-classes apply?](https://bitsofco.de/when-do-the-hover-focus-and-active-pseudo-classes-apply/#orderofstyleshoverthenfocusthenactive)
- number of declarations (descending) - this allows single declaration styles to overwrite styles from multi declaration styles
- greatest precedence of properties (ignoring vendor prefixed and custom properties) based on `-` counting - shorthand properties are inserted first eg longhand properties override shorthands.
- greatest precedence of values based on counting `-:;,#(`

## Roadmap

TODO see TODO.md

## Tailwind Differences

- beamwind uses a different color nameing scheme which is based on [Braid Design System - Tones](https://seek-oss.github.io/braid-design-system/foundations/tones/)

  > The default tailwind theme is available via [@beamwind/preset-tailwind](https://www.npmjs.com/package/@beamwind/preset-tailwind)

  ```js
  import { setup } from 'beamwind'
  import tailwindPreset from '@beamwind/preset-tailwind'

  setup(tailwindPreset)
  `
  ```

- beamwind is compatible with Tailwind v1 for IE11 support - but trys to integrate new v2 features

  The following feature are not yet available in beamwind:

  - dark mode
  - divide-y-reverse
  - [Font Variant Numeric](https://tailwindcss.com/docs/font-variant-numeric)

  > Did we miss a feature? Please [open a an issue](https://github.com/kenoxa/beamwind/issues/new) or [contribute](#contribute) a pull request.

### Additional Features

- most directives are lenient when a value is not found in the theme:
  - decimal numbers (`2` or `1.5`) are divided by a divisor and a unit is added (`w-2.5` becomes `width: 0.625rem;`)
  - fractions (`1/6` or `3/5`) are evaluated and `%` is added as a unit (`w-4/5` becomes `width: 80%;`)
  - color names (`text-rebeccapurple`) and hex colors (`text-#009900`)
- `d-*`: allows to set the `display` property (from [bootstrap](https://v5.getbootstrap.com/docs/5.0/utilities/display/))
- `appearance-*`: supports [all values](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance)
- `bg-<color>`: if a "_on_" color) (`on-<color>`) is found it is used as default CSS `color`; to change to a different color use `text-<color>` (tailwind style)
- `border` and `divide` allow to combine positions (`t`op, `r`righ, `l`eft, `b`ottom)

  - `tr` - `top` & `right`
  - `brl` - `bottom`, `right` and `left`

  > **Note** `x` and `y` can not be combined.

- `rotate`, `scale` , `skew` and `translate` can be used without `transform` when used alone

  > `rotate-45` works but when using `rotate-45 scale-150` only one of both is applied. In that case you must use `transform`: `transform rotate-45 scale-150`

- `bg-gradient` accepts additionally to the side-or-corner parameter (`bg-gradient-to-tr`) an angle or mixed parameters:
  - `bg-gradient` - defaults to `180deg` eg `to bottom`
  - `bg-gradient-45`
  - `bg-gradient-0.25turn`
  - `bg-gradient-to-bottom-left`

## Oceanwind Differences

> All [Tailwind Differences](#tailwind-differences) apply as well.

This library is heavily inspired and based on [oceanwind]. Without the work of [Luke Jackson](https://github.com/lukejacksonn) this would not have been possible! He wrote a great [blog post](http://blog.lukejacksonn.com/oceanwind) about the development of oceanwind.

Some notable differences are:

- beamwind does not generate strictly atomic CSS

  Some tailwind classes like [font-size](https://tailwindcss.com/docs/font-size) are comprised of several CSS declarations.
  They must be in one CSS declaration block to be overridden by single CSS declarations liken [line-heigth](https://tailwindcss.com/docs/line-height).

- beamwind supports non configured token values

  Most color directives accept color names (`text-rebeccapurple`) and hex colors (`text-#009900`) if the color is not found in [theme.colors](#colors).

  Some tailwind classes use a deterministic number calculation scheme (for example [width](https://tailwindcss.com/docs/width)). If beamwind detects a number in a token and there is not mapped value in the theme it uses the following algorithm to generate a CSS value:

  - decimal numbers (`2` or `1.5`) are divided by a divisor and a unit is added (`w-2.5` becomes `width: 0.625rem;`)
  - fractions (`1/6` or `3/5`) are evaluated and `%` is added as a unit (`w-4/5` becomes `width: 80%;`)

  > Non number-like values are used as is and may result in invalid CSS values.

- beamwind API [additionally supports](#function-signature)

  - variadic arguments like `cs('bg-blue', 'text-white')`
  - [Directive Grouping](#directive-grouping)
  - Tagged Template Interpolation values may additionally be Array, Object or Function ([inline plugins](#inline-plugins))
  - Object values which are String, Array or Object start a new variant group
  - support for [inline plugins](#inline-plugins)

- beamwind allows to define new plugins (see [Plugins](#plugins))
- beamwind adheres to the pseudo class and variant order as used by tailwind
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
  - [Background Image](https://tailwindcss.com/docs/gradient-color-stops#class-reference)
  - [ring](https://tailwindcss.com/docs/ring-width)
  - [text-opacity](https://tailwindcss.com/docs/text-opacity)
  - [bg-opacity](https://tailwindcss.com/docs/bg-opacity)
  - [divide-opacity](https://tailwindcss.com/docs/divide-opacity)
  - [border-opacity](https://tailwindcss.com/docs/border-opacity)
  - [placeholder-opacity](https://tailwindcss.com/docs/placeholder-opacity)

- oceanwind supports duplicate token tracking
- beamwind is 7-10 times faster than oceanwind (see [Benchmarks](https://github.com/kenoxa/beamwind/blob/main/benchmarks))

### Size Comparison

| &nbsp;   | [oceanwind](<(https://bundlephobia.com/result?p=oceanwind)>)                                                                     | [beamwind](<(https://bundlephobia.com/result?p=beamwind)>)                                                                    |
| -------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| minified | [![Oceanwind Minified](https://flat.badgen.net/bundlephobia/min/oceanwind?label)](https://bundlephobia.com/result?p=oceanwind)   | [![Beamwind Minified](https://flat.badgen.net/bundlephobia/min/beamwind?label)](https://bundlephobia.com/result?p=beamwind)   |
| gzipped  | [![Oceanwind Gzipped](https://flat.badgen.net/bundlephobia/minzip/oceanwind?label)](https://bundlephobia.com/result?p=oceanwind) | [![Beamwind Gzipped](https://flat.badgen.net/bundlephobia/minzip/beamwind?label)](https://bundlephobia.com/result?p=beamwind) |

## Support

All versions of Node.js are supported.

All browsers that support [Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#Browser_compatibility) and [Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys#Browser_compatibility) are supported (IE9+).

## Acknowledgements

Without these libraries and their authors this would not have been possible:

- [Tailwind CSS]
- [Oceanwind]
- [Otion]
- [cslx](https://www.npmjs.com/package/cslx)
- [Braid Design System](https://seek-oss.github.io/braid-design-system)

## Support

This project is free and open-source, so if you think this project can help you or anyone else, you may [star it on GitHub](https://github.com/carvjs/is). Feel free to [open an issue](https://github.com/carvjs/stdlib/issues) if you have any idea, question, or you've found a bug.

## Contribute

Thanks for being willing to contribute!

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

We are following the [Conventional Commits](https://www.conventionalcommits.org) convention.

## Sponsors

[![Kenoxa GmbH](https://images.opencollective.com/kenoxa/9c25796/logo/68.png)](https://www.kenoxa.com) [Kenoxa GmbH](https://www.kenoxa.com)

## License

[MIT](https://github.com/kenoxa/beamwind/blob/main/LICENSE) © [Kenoxa GmbH](https://kenoxa.com)

[tailwind css]: https://tailwindcss.com
[oceanwind]: https://www.npmjs.com/package/oceanwind
[otion]: https://www.npmjs.com/package/otion
