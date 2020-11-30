# @beamwind/system

> ready to go beamwind for using [@beamwind/preset-system](https://github.com/kenoxa/beamwind/blob/main/packages/preset-system)

[![MIT License](https://flat.badgen.net/github/license/kenoxa/beamwind)](https://github.com/kenoxa/beamwind/blob/main/LICENSE)
[![Latest Release](https://flat.badgen.net/npm/v/@beamwind/system?icon=npm&label)](https://www.npmjs.com/package/@beamwind/system)
[![Github](https://flat.badgen.net/badge/icon/kenoxa%2Fbeamwind?icon=github&label)](https://github.com/kenoxa/beamwind/blob/main/packages/system)
[![Typescript](https://flat.badgen.net/badge/icon/included?icon=typescript&label)](https://unpkg.com/browse/@beamwind/system/types/system.d.ts)
[![Bundle Size](https://flat.badgen.net/bundlephobia/minzip/@beamwind/system?icon=packagephobia&label&color=blue)](https://bundlephobia.com/result?p=@beamwind/system)

> [Read the docs](https://beamwind.js.org) |
> [API](https://beamwind.js.org/packages/system) |
> [Change Log](https://github.com/kenoxa/beamwind/blob/main/packages/system/CHANGELOG.md) > [⚡️ Demo](https://esm.codes/#Ly8gQmVhbXdpbmQgZGVtbyAoYmFzZWQgb24gY29kZSBieSBAbHVrZWphY2tzb25uIC0gY3JlYXRvciBvZiBvY2VhbndpbmQpCi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCiAgICAKaW1wb3J0IHsgcmVuZGVyLCBodG1sIH0gZnJvbSAnaHR0cHM6Ly9ucG0ucmV2ZXJzZWh0dHAuY29tL3ByZWFjdCxwcmVhY3QvaG9va3MsaHRtL3ByZWFjdCc7CmltcG9ydCB7IGJ3IH0gZnJvbSAnaHR0cHM6Ly91bnBrZy5jb20vQGJlYW13aW5kL3BsYXk/bW9kdWxlJwoKY29uc3Qgc3R5bGUgPSB7CiAgLy8gRXhhbXBsZSBvZiBhYnN0cmFjdGVkIHN0eWxlCiAgY29udGFpbmVyOiBid2BoLWZ1bGwgYmctcHJvbW90ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcmAKfQoKcmVuZGVyKAogIGh0bWxgCiAgICA8ZGl2IGNsYXNzPSR7c3R5bGUuY29udGFpbmVyfT4KICAgICAgPGgxIGNsYXNzPSR7CiAgICAgICAgLy8gRXhhbXBsZSBvZiBhbiBpbmxpbmUgc3R5bGUKICAgICAgICBid2AKICAgICAgICAgIHRleHQoNHhsIHVuZGVybGluZSkKICAgICAgICAgIGZvbnQoYm9sZCBzYW5zKQogICAgICAgICAgdHJhbnNpdGlvbgogICAgICAgICAgaG92ZXI6KHRyYW5zZm9ybSByb3RhdGUtbWQgc2NhbGUtMnhsIGN1cnNvci1wb2ludGVyKQogICAgICAgICAgYWN0aXZlOih0cmFuc2Zvcm0gLXJvdGF0ZS14bCBzY2FsZS0zeGwpCiAgICAgICAgYAogICAgICB9PkhlbGxvIFdvcmxkPC9oMT4KICAgIDwvZGl2PgogIGAsCiAgZG9jdW1lbnQuYm9keQopOw==)

---

@beamwind/system tries to follow a semantic naming approach by using a common _language_ to reduce the guess work. A small set of well known design tokens hopefully prevents magic values or ambiguous names. This creates a taxonomy of tokenized variables used by system adopters and library’s components. The more predictably the model is catalogued, the easier it is to apply, maintain, and endure.

> Please see [@beamwind/preset-system](https://github.com/kenoxa/beamwind/blob/main/packages/preset-system) for further information.

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
npm install @beamwind/system
```

## Usage

> Please refer to the [main documentation](https://beamwind.js.org#usage) and [@beamwind/preset-system](https://github.com/kenoxa/beamwind/blob/main/packages/preset-system) for further information.

```js
import { bw } from '@beamwind/system'

bw`text-critical`
```

For further customization `setup` is exported:

```js
import { bw, setup } from '@beamwind/system'

setup({
  colors: {
    important: '#DC2626',
  },
})

bw`text-important` // will result in a #DC2626 as text color
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
