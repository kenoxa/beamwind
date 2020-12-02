# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
