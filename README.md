# Beamwind

> a [collection of packages](#packages) to compile [Tailwind CSS] like shorthand syntax into CSS at runtime

[![License](https://badgen.net/github/license/kenoxa/beamwind)](https://github.com/kenoxa/beamwind/blob/main/LICENSE)
[![CI](https://github.com/kenoxa/beamwind/workflows/CI/badge.svg)](https://github.com/kenoxa/beamwind/actions?query=workflow%3Aci)
[![Coverage Status](https://badgen.net/coveralls/c/github/kenoxa/beamwind/main)](https://coveralls.io/github/kenoxa/beamwind?branch=main)
[![PRs Welcome](https://badgen.net/badge/PRs/welcome/purple)](http://makeapullrequest.com)
[![Conventional Commits](https://badgen.net/badge/Conventional%20Commits/1.0.0/cyan)](https://conventionalcommits.org)
[![Sponsor](https://flat.badgen.net/badge/sponsored%20by/Kenoxa/2980b9)](https://www.kenoxa.com)

This library takes inspiration from [Tailwind CSS] ([see differences](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/README.md#tailwind-differences)), [Oceanwind] ([see differences](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/README.md#oceanwind-differences)) and [Otion] to provide means of efficiently generating mostly atomic styles from shorthand syntax and appending them to the DOM at runtime.

> **Beamwind**: a wind blowing against a vessel from a direction at right angles to its keel for optimal speed.

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Quick Start](#quick-start)
- [Packages](#packages)
- [Examples](#examples)
- [Develop](#develop)
- [Support](#support)
- [Contribute](#contribute)
- [Sponsors](#sponsors)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

## Quick Start

> ⚡️ Check out the [live and interactive demo](https://esm.codes/#Ly8gQmVhbXdpbmQgZGVtbyAoYmFzZWQgb24gY29kZSBieSBAbHVrZWphY2tzb25uIC0gY3JlYXRvciBvZiBvY2VhbndpbmQpCi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCiAgICAKaW1wb3J0IHsgcmVuZGVyLCBodG1sIH0gZnJvbSAnaHR0cHM6Ly9ucG0ucmV2ZXJzZWh0dHAuY29tL3ByZWFjdtwwcmVhY3QvaG9va3MsaHRtL3ByZWFjdCc7CmltcG9ydCB0YWlsd2luZCBmcm9tICdodHRwczovL3VucGtnLmNvbS9AYmVhbXdpbmQvcHJlc2V0LXRhaWx3aW5kP21vZHVsZScKaW1wb3J0IHByZWZsaWdodCBmcm9tICdodHRwczovL3VucGtnLmNvbS9AYmVhbXdpbmQvcHJlZmxpZ2h0P21vZHVsZScKaW1wb3J0IHsgYncsIHNldHVwIH0gZnJvbSAnaHR0cHM6Ly91bnBrZy5jb20vYmVhbXdpbmQ/bW9kdWxlJwoKc2V0dXAoW3RhaWx3aW5kLCBwcmVmbGlnaHRdKQoKCmNvbnN0IHN0eWxlID0gewogIC8vIEV4YW1wbGUgb2YgYWJzdHJhY3RlZCBzdHlsZQogIGNvbnRhaW5lcjogYndgaC1mdWxsIGJnLXByb21vdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJgCn0KCnJlbmRlcigKICBodG1sYAogICAgPGRpdiBjbGFzc05hbWU9JHtzdHlsZS5jb250YWluZXJ9PgogICAgICA8aDEgY2xhc3NOYW1lPSR7CiAgICAgICAgLy8gRXhhbXBsZSBvZiBhbiBpbmxpbmUgc3R5bGUKICAgICAgICBid2AKICAgICAgICAgIHRleHQoNHhsIHdoaXRlKQogICAgICAgICAgZm9udChib2xkIHNhbnMpCiAgICAgICAgICBob3ZlcjoodHJhbnNpdGlvbiB0cmFuc2Zvcm0gcm90YXRlLTUgc2NhbGUtMTUwIGN1cnNvci1wb2ludGVyKQogICAgICAgIGAKICAgICAgfT5IZWxsbyBXb3JsZDwvaDE+CiAgICA8L2Rpdj4KICBgLAogIGRvY3VtZW50LmJvZHkKKTs=)

```js
import { bw } from 'https://unpkg.com/beamwind?module'

document.body.className = bw`h-full bg-primary rotate-3 scale-95`
```

Using the [tailwind preset](https://github.com/kenoxa/beamwind/blob/main/packages/preset-tailwind) and a [set opinionated of base styles](https://github.com/kenoxa/beamwind/blob/main/packages/preflight) for modern browsers:

```js
import tailwind from 'https://unpkg.com/@beamwind/preset-tailwind?module'
import preflight from 'https://unpkg.com/@beamwind/preflight?module'
import { bw, setup } from 'https://unpkg.com/beamwind?module'

setup([tailwind, preflight])

document.body.className = bw`h-full bg-purple-500 rotate-3 scale-95`
```

## Packages

This projects is split into several packages. The main one is [beamwind](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind) itself:

- [Key Features](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/README.md#key-features)
- [Installation](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/README.md#installation)
- [Usage](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/README.md#usage)
- [Theming](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/README.md#theming)
- [Plugins](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/README.md#plugins)
- [API](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/README.md#api)
- [Selector Ordering](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/README.md#selector-ordering)
- [Tailwind Differences](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/README.md#tailwind-differences)
- [Oceanwind Differences](https://github.com/kenoxa/beamwind/blob/main/packages/beamwind/README.md#oceanwind-differences)

### Presets

> reusable configuration presets

- [@beamwind/preset-semantic](https://github.com/kenoxa/beamwind/blob/main/packages/preset-semantic) - a semantic color scheme
- [@beamwind/preset-tailwind](https://github.com/kenoxa/beamwind/blob/main/packages/preset-tailwind) - mirroring tailwind default theme

```jsx
import tailwind from '@beamwind/tailwind'
import { setup } from 'beamwind'

setup(tailwind)
```

### Base Styles

> A set of opinionated base styles that are designed to smooth over cross-browser inconsistencies and make it easier for to work within the constraints of your design system.

- [@beamwind/preflight](https://github.com/kenoxa/beamwind/blob/main/packages/preflight) - for modern browsers
- [@beamwind/reset](https://github.com/kenoxa/beamwind/blob/main/packages/reset) - for legacy browsers like IE10/11

```jsx
import preflight from '@beamwind/preflight'
import { setup } from 'beamwind'

setup(preflight)
```

### Helpers

- [@beamwind/colors](https://github.com/kenoxa/beamwind/blob/main/packages/colors) - color utilities

## Examples

- [svelte](https://github.com/kenoxa/beamwind/blob/main/examples/svelte)

## Develop

Clone the repository and cd into the project directory.

Run `yarn install`.

Cd into the package that you'd like to make progress on.

- `yarn test`: Run test suite including linting
- `yarn format`: Ensure consistent code style
- `yarn publish`: To publish all changed packages

## Support

This project is free and open-source, so if you think this project can help you or anyone else, you may [star it on GitHub](https://github.com/kenoxa/beamwind). Feel free to [open an issue](https://github.com/beamwind/beamwind/issues) if you have any idea, question, or you've found a bug.

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
