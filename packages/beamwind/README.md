# beamwind

> ready to go beamwind with [@beamwind/preflight](https://github.com/kenoxa/beamwind/blob/main/packages/preflight) and [@beamwind/preset-tailwind](https://github.com/kenoxa/beamwind/blob/main/packages/preset-tailwind)

[![MIT License](https://flat.badgen.net/github/license/kenoxa/beamwind)](https://github.com/kenoxa/beamwind/blob/main/LICENSE)
[![Latest Release](https://flat.badgen.net/npm/v/beamwind?icon=npm&label)](https://www.npmjs.com/package/beamwind)
[![Github](https://flat.badgen.net/badge/icon/kenoxa%2Fbeamwind?icon=github&label)](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind)
[![Typescript](https://flat.badgen.net/badge/icon/included?icon=typescript&label)](https://unpkg.com/browse/beamwind/types/beamwind.d.ts)
[![Bundle Size](https://flat.badgen.net/bundlephobia/minzip/beamwind?icon=packagephobia&label&color=blue)](https://bundlephobia.com/result?p=beamwind)

> [Read the docs](https://beamwind.js.org) |
> [API](https://beamwind.js.org/packages/beamwind) |
> [Change Log](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/CHANGELOG.md) |
> [⚡️ Demo](https://esm.codes/#Ly8gQmVhbXdpbmQgZGVtbyAoYmFzZWQgb24gY29kZSBieSBAbHVrZWphY2tzb25uIC0gY3JlYXRvciBvZiBvY2VhbndpbmQpCi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCiAgICAKaW1wb3J0IHsgcmVuZGVyLCBodG1sIH0gZnJvbSAnaHR0cHM6Ly9ucG0ucmV2ZXJzZWh0dHAuY29tL3ByZWFjdCxwcmVhY3QvaG9va3MsaHRtL3ByZWFjdCc7CmltcG9ydCB7IGJ3IH0gZnJvbSAnaHR0cHM6Ly91bnBrZy5jb20vYmVhbXdpbmQ/bW9kdWxlJwoKCmNvbnN0IHN0eWxlID0gewogIC8vIEV4YW1wbGUgb2YgYWJzdHJhY3RlZCBzdHlsZQogIGNvbnRhaW5lcjogYndgaC1mdWxsIGJnLXBpbmstNzAwIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJgCn0KCnJlbmRlcigKICBodG1sYAogICAgPGRpdiBjbGFzcz0ke3N0eWxlLmNvbnRhaW5lcn0+CiAgICAgIDxoMSBjbGFzcz0kewogICAgICAgIC8vIEV4YW1wbGUgb2YgYW4gaW5saW5lIHN0eWxlCiAgICAgICAgYndgCiAgICAgICAgICB0ZXh0KDR4bCB1bmRlcmxpbmUpCiAgICAgICAgICBmb250KGJvbGQgc2FucykKICAgICAgICAgIHRyYW5zaXRpb24KICAgICAgICAgIGhvdmVyOih0cmFuc2Zvcm0gcm90YXRlLTYgc2NhbGUtMTI1IGN1cnNvci1wb2ludGVyKQogICAgICAgICAgYWN0aXZlOih0cmFuc2Zvcm0gLXJvdGF0ZS0xMiBzY2FsZS0xNTApCiAgICAgICAgYAogICAgICB9PkhlbGxvIFdvcmxkPC9oMT4KICAgIDwvZGl2PgogIGAsCiAgZG9jdW1lbnQuYm9keQopOw==)

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
npm install beamwind
```

## Usage

> Please refer to the [main documentation](https://beamwind.js.org#usage) and [@beamwind/preset-tailwind](https://github.com/kenoxa/beamwind/blob/main/packages/preset-tailwind) for further information.

```js
import { bw } from 'beamwind'

bw`text-purple-500`
```

For further customization `setup` is exported:

```js
import { bw, setup } from 'beamwind'

setup({
  colors: {
    'red-500': '#DC2626',
  },
})

bw`text-red-500` // will result in a DC2626 text-color
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
