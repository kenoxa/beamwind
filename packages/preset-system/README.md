# @beamwind/preset-system

> beamwind design system preset using a semantic naming scheme

[![MIT License](https://flat.badgen.net/github/license/kenoxa/beamwind)](https://github.com/kenoxa/beamwind/blob/main/LICENSE)
[![Latest Release](https://flat.badgen.net/npm/v/@beamwind/preset-system?icon=npm&label)](https://www.npmjs.com/package/@beamwind/preset-system)
[![Github](https://flat.badgen.net/badge/icon/kenoxa%2Fbeamwind?icon=github&label)](https://github.com/kenoxa/beamwind/blob/main/packages/preset-system)
[![Typescript](https://flat.badgen.net/badge/icon/included?icon=typescript&label)](https://unpkg.com/browse/@beamwind/preset-system/types/preset-system.d.ts)
[![Bundle Size](https://flat.badgen.net/bundlephobia/minzip/@beamwind/preset-system?icon=packagephobia&label&color=blue)](https://bundlephobia.com/result?p=@beamwind/preset-system)

> [Read the docs](https://beamwind.js.org) |
> [API](https://beamwind.js.org/packages/preset-system) |
> [Change Log](https://github.com/kenoxa/beamwind/blob/main/packages/preset-system/CHANGELOG.md)

---

> This is a only a preset. [@beamwind/system](https://github.com/kenoxa/beamwind/blob/main/packages/system) provides a ready to use `bw` export.

---

@beamwind/preset-system tries to follow a semantic naming approach by using a common _language_ to reduce the guess work. A small set of well known design tokens hopefully prevents magic values or ambiguous names. This creates a taxonomy of tokenized variables used by system adopters and library’s components. The more predictably the model is catalogued, the easier it is to apply, maintain, and endure.

As with all systems, one of the most important things are reasoning. Why use this color instead of that color? Thinking color systems instead of color palettes can benefit everyone involved in choosing and using color as part of a UI. It allows designers to focus on the more complex problems — no more procrastinating on design choices. This enables developers to create a simpler more logical codebase.

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Usage](#usage)
- [Colors](#colors)
- [Spacing](#spacing)
- [Typography](#typography)
- [Scales](#scales)
- [Acknowledgements](#acknowledgements)
- [Contribute](#contribute)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

## Installation

```sh
npm install @beamwind/preset-system
```

## Usage

> Please refer to the [main documentation](https://beamwind.js.org#usage) for further information.

```js
import { setup } from '@beamwind/core'
import system from '@beamwind/preset-system'

setup(
  system({
    colors: {
      // Override any color - the tones should be defined here
    },
  }),
)
```

See [preset-system/src/theme.ts](https://github.com/kenoxa/beamwind/blob/main/packages/preset-system/src/theme.ts) and [core/src/theme.ts](https://github.com/kenoxa/beamwind/blob/main/packages/core/src/theme.ts) for the set values.

## Colors

Naming colors is one of the most challenging parts of a color system. Many systems try to map color tones to their relative lightness, but this can be problematic because it creates a very loose mental model. Other systems will try to name colors based on use or hierarchy and those are equally problematic.

Applying a systematic approach to colors will help stay organized and give reasoning behind how and when to use certain colors. But most importantly, it will allow to easily apply a new color scheme to the design. _Dark Mode_ will only be a few color tweaks away, once everything is put into the system.

The color names are designed to have a strong correlation with the tone of voice being used.

> Internally [@beamwind/colors](https://github.com/kenoxa/beamwind/blob/main/packages/colors) is used to generate _states_, "_on_" and _surface_ colors for a _tone_.

### Tones

- `primary` - is the color displayed most frequently across screens and components
- `secondary` - provides more ways to accent and distinguish certain screens and component parts

  Secondary colors are best for:

  - Floating action buttons
  - Selection controls, like sliders and switches
  - Highlighting selected text
  - Progress bars
  - Links and headlines

- `critical` - Super important. You need to see this.
- `caution` - You should be aware something is happening or mid-way through a process. Could be a risk or an item that needs to be acted upon.
- `positive` - Good vibes & new things! Wants to get the user to act on something or be aware something good happened.
- `neutral` - Subtle information or details historic in nature. Often already actioned & in the past. No priority required due to the lack of importance or change.
- `info` - Guidance & advice. Generally from the UI or business. Functional, calm and non urgent.
- `promote` - Things we wish to make prominent and give more visibility to. Typically used to highlight features, updates or marketing messages.

### States

> refines the used tone - `primary-hover` or `primary-active`

- `hover`
- `active`
- `disabled` - usually in form controls and buttons
- `selected` - indicate selected or focused control

### "_On_" colors

> provide [accessible contrast](https://contrast-ratio.com/) to their base color - `on-primary` or `on-primary-active`

Whenever elements, such as text or icons, appear in front of surfaces, those elements should use colors designed to be clear and legible against the colors behind them. When a color appears "_on_" top of a primary color, it’s called an "_on primary color_". They are labelled using the original color category (such as primary color) with the prefix `on-`.

"_On_" colors are primarily applied to text, iconography, and strokes. Sometimes, they are applied to surfaces.

> The `bg-<color>` directive adds a `color` CSS declaration if a corresponding `on-*` color is found.

### Surface

> affect surfaces of components, such as cards, sheets, and menus

- `surface` - primary background
- `sheet` - for accented backgrounds
- `panel` - for cards
- `menu` - for dropouts

## Spacing

beamwind provides a standard white space scale using common design terms:

- `none`, `base`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `px`, `auto`

## Typography

Assign values to the scale (h1 — h6)

- `h1`: Typically used for headings on main screens
- `h2`: Subheadings, such as for container headers
- `h3`: Supplementary content such as numerical values or callouts
- `h4`: Axis labels, supporting content
- `h5`: Supporting content, such as card containers
- `h6`: Supporting content, such as labels
- `p`: Body copy

## Scales

### z-index

https://v5.getbootstrap.com/docs/5.0/extend/approach/#z-index-scales

## Acknowledgements

- [Braid Design System / Tones](https://seek-oss.github.io/braid-design-system/foundations/tones)
- [Material Design / The color system](https://material.io/design/color/the-color-system.html#color-usage-and-palettes)
- [Dark Mode — Working with Color Systems](https://medium.com/nodesdigital/dark-mode-working-with-color-systems-e73aeab8dbae)
- [Speccing Colors in Design Systems](https://medium.com/@ethersystem/speccing-colors-in-design-systems-f06e91ed9ca0)
- [The light and the dark side: creating a UI colour system in 3 steps](https://uxdesign.cc/the-light-and-the-dark-side-creating-a-ui-colour-system-in-3-steps-41818c5bdb60)
- [Light & Dark Color Modes in Design Systems](https://medium.com/eightshapes-llc/light-dark-9f8ea42c9081)

## Contribute

Thanks for being willing to contribute!

> This project is free and open-source, so if you think this project can help you or anyone else, you may [star it on GitHub](https://github.com/kenoxa/beamwind). Feel free to [open an issue](https://github.com/kenoxa/beamwind/issues) if you have any idea, question, or you've found a bug.

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

We are following the [Conventional Commits](https://www.conventionalcommits.org) convention.

### Sponsors

[![Kenoxa GmbH](https://images.opencollective.com/kenoxa/9c25796/logo/68.png)](https://www.kenoxa.com) [Kenoxa GmbH](https://www.kenoxa.com)

## License

[MIT](https://github.com/kenoxa/beamwind/blob/main/LICENSE) © [Kenoxa GmbH](https://kenoxa.com)
