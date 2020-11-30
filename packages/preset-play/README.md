# @beamwind/preset-play

> rapid prototyping for beamwind using auto-conversion of values

[![MIT License](https://flat.badgen.net/github/license/kenoxa/beamwind)](https://github.com/kenoxa/beamwind/blob/main/LICENSE)
[![Latest Release](https://flat.badgen.net/npm/v/@beamwind/preset-play?icon=npm&label)](https://www.npmjs.com/package/@beamwind/preset-play)
[![Github](https://flat.badgen.net/badge/icon/kenoxa%2Fbeamwind?icon=github&label)](https://github.com/kenoxa/beamwind/blob/main/packages/preset-play)
[![Typescript](https://flat.badgen.net/badge/icon/included?icon=typescript&label)](https://unpkg.com/browse/@beamwind/preset-play/types/preset-play.d.ts)
[![Bundle Size](https://flat.badgen.net/bundlephobia/minzip/@beamwind/preset-play?icon=packagephobia&label&color=blue)](https://bundlephobia.com/result?p=@beamwind/preset-play)

> [Read the docs](https://beamwind.js.org) |
> [API](https://beamwind.js.org/packages/preset-play) |
> [Change Log](https://github.com/kenoxa/beamwind/blob/main/packages/preset-play/CHANGELOG.md)

---

> This is a only a preset. [@beamwind/play](https://github.com/kenoxa/beamwind/blob/main/packages/play) provides a ready to use `bw` export.
> This preset should be used for _prototyping only_ as it usually prevents a consistent UI experience.

---

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

## Installation

```sh
npm install @beamwind/preset-play
```

## Usage

> Please refer to the [main documentation](https://beamwind.js.org#usage) for further information.

```js
import { setup, warn } from '@beamwind/core'
import play from '@beamwind/preset-play'

// Use warn as fallback if no conversion could be made
setup(play(warn))
```

See [preset-play/src/play.ts](https://github.com/kenoxa/beamwind/blob/main/packages/preset-play/src/play.ts) which conversions are applied.

Most tailwind classes use a deterministic number calculation scheme (for example [width](https://tailwindcss.com/docs/width)). If beamwind detects a number in a directive and there is not mapped value in the theme it uses the following algorithm to generate a CSS value which aligns with the tailwind rules for that directive:

- decimal numbers (`2` or `1.5`) are divided by a divisor and a unit is added (`w-2.5` becomes `width: 0.625rem;`)
- fractions (`1/6` or `3/5`) are evaluated and `%` is used as a unit (`w-4/5` becomes `width: 80%;`)

- most directives are lenient when a value is not found in the theme:

  - decimal numbers (`2` or `1.5`) are divided by a divisor and a unit is added (`w-2.5` becomes `width: 0.625rem;`)
  - fractions (`1/6` or `3/5`) are evaluated and `%` is added as a unit (`w-4/5` becomes `width: 80%;`)
  - color names (`text-rebeccapurple`) and hex colors (`text-#009900`)

- `bg-gradient` accepts additionally to the side-or-corner parameter (`bg-gradient-to-tr`) an angle or mixed parameters:
  - `bg-gradient` - defaults to `180deg` eg `to bottom`
  - `bg-gradient-45`
  - `bg-gradient-0.25turn`
  - `bg-gradient-to-bottom-left`

## Contribute

Thanks for being willing to contribute!

> This project is free and open-source, so if you think this project can help you or anyone else, you may [star it on GitHub](https://github.com/kenoxa/beamwind). Feel free to [open an issue](https://github.com/kenoxa/beamwind/issues) if you have any idea, question, or you've found a bug.

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

We are following the [Conventional Commits](https://www.conventionalcommits.org) convention.

### Sponsors

[![Kenoxa GmbH](https://images.opencollective.com/kenoxa/9c25796/logo/68.png)](https://www.kenoxa.com) [Kenoxa GmbH](https://www.kenoxa.com)

## License

[MIT](https://github.com/kenoxa/beamwind/blob/main/LICENSE) © [Kenoxa GmbH](https://kenoxa.com)
