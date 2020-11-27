# @beamwind/tailwind

> ready to go beamwind with [@beamwind/preflight](https://github.com/kenoxa/beamwind/blob/main/packages/preflight) and [@beamwind/preset-tailwind](https://github.com/kenoxa/beamwind/blob/main/packages/preset-tailwind)

[![License](https://flat.badgen.net/github/license/kenoxa/beamwind)](https://github.com/kenoxa/beamwind/blob/main/LICENSE)
[![Latest Release](https://flat.badgen.net/npm/v/@beamwind/tailwind?label=release)](https://www.npmjs.com/package/@beamwind/tailwind)
[![Bundle Size](https://flat.badgen.net/bundlephobia/minzip/@beamwind/tailwind?icon=packagephobia&label&color=blue)](https://bundlephobia.com/result?p=@beamwind/tailwind)
[![Typescript](https://flat.badgen.net/badge/icon/included?icon=typescript&label)](https://unpkg.com/browse/@beamwind/tailwind/dist/index.d.ts)
[![Sponsor](https://flat.badgen.net/badge/sponsored%20by/Kenoxa/2980b9)](https://www.kenoxa.com)

```js
import { tw } from 'https://unpkg.com/@beamwind/tailwind?module'

document.body.className = tw`h-full bg-purple-500 rotate-3 scale-95`
```

> ⚡️ Check out the [live and interactive demo](https://esm.codes/#Ly8gQmVhbXdpbmQgZGVtbyAoYmFzZWQgb24gY29kZSBieSBAbHVrZWphY2tzb25uIC0gY3JlYXRvciBvZiBvY2VhbndpbmQpCi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCiAgICAKaW1wb3J0IHsgcmVuZGVyLCBodG1sIH0gZnJvbSAnaHR0cHM6Ly9ucG0ucmV2ZXJzZWh0dHAuY29tL3ByZWFjdCxwcmVhY3QvaG9va3MsaHRtL3ByZWFjdCc7CmltcG9ydCB7IHR3IH0gZnJvbSAnaHR0cHM6Ly91bnBrZy5jb20vQGJlYW13aW5kL3RhaWx3aW5kP21vZHVsZScKCmNvbnN0IHN0eWxlID0gewogIC8vIEV4YW1wbGUgb2YgYWJzdHJhY3RlZCBzdHlsZQogIGNvbnRhaW5lcjogdHdgaC1mdWxsIGJnLXB1cnBsZS01MDAgdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcmAKfQoKcmVuZGVyKAogIGh0bWxgCiAgICA8ZGl2IGNsYXNzPSR7c3R5bGUuY29udGFpbmVyfT4KICAgICAgPGgxIGNsYXNzPSR7CiAgICAgICAgLy8gRXhhbXBsZSBvZiBhbiBpbmxpbmUgc3R5bGUKICAgICAgICB0d2AKICAgICAgICAgIHRleHQoNHhsIHVuZGVybGluZSkKICAgICAgICAgIGZvbnQoYm9sZCBzYW5zKQogICAgICAgICAgdHJhbnNpdGlvbgogICAgICAgICAgaG92ZXI6KHRyYW5zZm9ybSByb3RhdGUtNSBzY2FsZS0xNTAgY3Vyc29yLXBvaW50ZXIpCiAgICAgICAgICBhY3RpdmU6KHRyYW5zZm9ybSAtcm90YXRlLTE1IHNjYWxlLTE4MCkKICAgICAgICBgCiAgICAgIH0+SGVsbG8gV29ybGQ8L2gxPgogICAgPC9kaXY+CiAgYCwKICBkb2N1bWVudC5ib2R5Cik7)

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contribute](#contribute)
- [Sponsors](#sponsors)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

## Installation

```sh
npm install @beamwind/tailwind
```

## Usage

```js
import { tw } from '@beamwind/tailwind'

tw`text-purple-500`
```

For further customization `setup` is exported:

```js
import { tw, setup } from '@beamwind/tailwind'

setup({
  colors: {
    'red-500': 'hotpink',
  },
})

tw`text-red-500` // will result in a hotpink background-color
```

## Support

This project is free and open-source, so if you think this project can help you or anyone else, you may [star it on GitHub](https://github.com/kenoxa/beamwind). Feel free to [open an issue](https://github.com/kenoxa/beamwind/issues) if you have any idea, question, or you've found a bug.

## Contribute

Thanks for being willing to contribute!

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

We are following the [Conventional Commits](https://www.conventionalcommits.org) convention.

## Sponsors

[![Kenoxa GmbH](https://images.opencollective.com/kenoxa/9c25796/logo/68.png)](https://www.kenoxa.com) [Kenoxa GmbH](https://www.kenoxa.com)

## License

[MIT](https://github.com/kenoxa/beamwind/blob/main/LICENSE) © [Kenoxa GmbH](https://kenoxa.com)
