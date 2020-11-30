# @beamwind/reset

> an opinionated set of base styles for legacy browsers like IE10/11 based on [Tailwind Preflight v1](https://v1.tailwindcss.com/docs/preflight)

[![MIT License](https://flat.badgen.net/github/license/kenoxa/beamwind)](https://github.com/kenoxa/beamwind/blob/main/LICENSE)
[![Latest Release](https://flat.badgen.net/npm/v/@beamwind/reset?icon=npm&label)](https://www.npmjs.com/package/@beamwind/reset)
[![Github](https://flat.badgen.net/badge/icon/kenoxa%2Fbeamwind?icon=github&label)](https://github.com/kenoxa/beamwind/blob/main/packages/reset)
[![Typescript](https://flat.badgen.net/badge/icon/included?icon=typescript&label)](https://unpkg.com/browse/@beamwind/reset/types/reset.d.ts)
[![Bundle Size](https://flat.badgen.net/bundlephobia/minzip/@beamwind/reset?icon=packagephobia&label&color=blue)](https://bundlephobia.com/result?p=@beamwind/reset)

> [Read the docs](https://beamwind.js.org) |
> [API](https://beamwind.js.org/packages/reset) |
> [Change Log](https://github.com/kenoxa/beamwind/blob/main/packages/reset/CHANGELOG.md)

---

Built on top of [normalize.css](https://github.com/necolas/normalize.css/), @beamwind/reset is a set of base styles that are designed to smooth over cross-browser inconsistencies and make it easier for you to work within the constraints of your design system.

If you do **not** need to support IE 10/11, we recommend using [@beamwind/preflight](https://github.com/kenoxa/beamwind/blob/main/packages/preflight).

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
npm install @beamwind/reset
```

## Usage

> Please refer to the [main documentation](https://beamwind.js.org#usage) for further information.

```js
import { setup } from '@beamwind/core'
import reset from '@beamwind/reset'

setup(reset())
```

## Contribute

Thanks for being willing to contribute!

> This project is free and open-source, so if you think this project can help you or anyone else, you may [star it on GitHub](https://github.com/kenoxa/beamwind). Feel free to [open an issue](https://github.com/kenoxa/beamwind/issues) if you have any idea, question, or you've found a bug.

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

We are following the [Conventional Commits](https://www.conventionalcommits.org) convention.

### Sponsors

[![Kenoxa GmbH](https://images.opencollective.com/kenoxa/9c25796/logo/68.png)](https://www.kenoxa.com) [Kenoxa GmbH](https://www.kenoxa.com)

## License

[MIT](https://github.com/kenoxa/beamwind/blob/main/LICENSE) © [Kenoxa GmbH](https://kenoxa.com)
