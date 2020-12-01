# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.1](https://github.com/kenoxa/beamwind/compare/@beamwind/core@2.0.0...@beamwind/core@2.0.1) (2020-12-01)

**Note:** Version bump only for package @beamwind/core

# 2.0.0 (2020-11-30)

- BREAKING CHANGE: rewrite to be strict by default like oceanwind

  All core plugins have been adjusted to use a theme value resolver. That
  is hooked into the new `mode.unknown()` handler which may convert
  unknown values.

  The main package (beamwind) is now pre-configured with a tailwind v2
  theme. The lenient behavior is available via @beamwind/play.
