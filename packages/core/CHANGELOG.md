# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.3.0](https://github.com/kenoxa/beamwind/compare/@beamwind/core@2.2.0...@beamwind/core@2.3.0) (2020-12-05)

### Bug Fixes

- transform resets its css properties to break inheritence ([c521414](https://github.com/kenoxa/beamwind/commit/c521414571e3e36b156e6ecc0e80cb66025a2826))

### Features

- ring defaults ([e50bfdf](https://github.com/kenoxa/beamwind/commit/e50bfdf1edf3dfb2421b4d9ab3a73d09eb1da475))
- support negated values in directive groupings ([b1b66ff](https://github.com/kenoxa/beamwind/commit/b1b66ff78dace4f5d9aaeb9ee9eb960bb3b7583d))

# [2.2.0](https://github.com/kenoxa/beamwind/compare/@beamwind/core@2.1.0...@beamwind/core@2.2.0) (2020-12-04)

### Features

- :first, :last, :odd and :event states ([0d1c514](https://github.com/kenoxa/beamwind/commit/0d1c514e10e76b604780fae90712540787655239))
- background clip directives ([ea52dd1](https://github.com/kenoxa/beamwind/commit/ea52dd1d3eb474237b68582794d59756895db356))
- contents directive ([993f823](https://github.com/kenoxa/beamwind/commit/993f8239716c4c798ecb246801e62a51a3845df7))
- dark mode ([11eb4aa](https://github.com/kenoxa/beamwind/commit/11eb4aafefb815d5afcd8238935bc48d4094df14))
- display contents directive ([a118f6b](https://github.com/kenoxa/beamwind/commit/a118f6bedd1b22fd9180cb03e63cbc9d2dbf885f))
- gap-x & gap-y ([e90f388](https://github.com/kenoxa/beamwind/commit/e90f388c0d7843fe353e5655f329c3b4169c67c7))
- overscroll behavior ([035e50b](https://github.com/kenoxa/beamwind/commit/035e50ba7c275bdd2e708aebafb86eeb54a725d4))
- place directives ([b3c5d94](https://github.com/kenoxa/beamwind/commit/b3c5d941640900da56a2c2423a2aca9db6f7d676))
- space and divide reverse directives ([f526cb2](https://github.com/kenoxa/beamwind/commit/f526cb2114a4f3ce7c91870cf559fee08dc260cc))
- transform-gpu ([a28342f](https://github.com/kenoxa/beamwind/commit/a28342fbd7ae8a2a2d035306e35abbd40c54bdff))

# [2.1.0](https://github.com/kenoxa/beamwind/compare/@beamwind/core@2.0.2...@beamwind/core@2.1.0) (2020-12-02)

### Bug Fixes

- cssom injector nonce handling ([6ca6c4d](https://github.com/kenoxa/beamwind/commit/6ca6c4d6c5212a0a8bd734367f0768cd79541fb4))

### Features

- support background images from theme ([492ffe0](https://github.com/kenoxa/beamwind/commit/492ffe063197d4af1a6ea2daff89e8e43d0855ed))

## [2.0.2](https://github.com/kenoxa/beamwind/compare/@beamwind/core@2.0.1...@beamwind/core@2.0.2) (2020-12-01)

### Bug Fixes

- sequential grouping generate valid directive ([c25f8cc](https://github.com/kenoxa/beamwind/commit/c25f8cccc495606797d2ddd9512ef1e2f9326186))

## [2.0.1](https://github.com/kenoxa/beamwind/compare/@beamwind/core@2.0.0...@beamwind/core@2.0.1) (2020-12-01)

**Note:** Version bump only for package @beamwind/core

# 2.0.0 (2020-11-30)

- BREAKING CHANGE: rewrite to be strict by default like oceanwind

  All core plugins have been adjusted to use a theme value resolver. That
  is hooked into the new `mode.unknown()` handler which may convert
  unknown values.

  The main package (beamwind) is now pre-configured with a tailwind v2
  theme. The lenient behavior is available via @beamwind/play.
