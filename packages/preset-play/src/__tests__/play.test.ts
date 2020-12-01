import type { Theme } from '@beamwind/types'

import { strict, theme } from '@beamwind/core'
import { play } from '../play'

test.each([
  ['borderWidth', ['px'], '1px'],
  ['borderWidth', ['0'], '0px'],
  ['borderWidth', ['1'], '1px'],
  ['borderWidth', ['2'], '2px'],
  ['divideWidth', ['px'], '1px'],
  ['divideWidth', ['0'], '0px'],
  ['divideWidth', ['1'], '1px'],
  ['divideWidth', ['2'], '2px'],
  ['spacing', ['px'], '1px'],
  ['spacing', ['1'], '0.25rem'],
  ['spacing', ['2'], '0.5rem'],
  ['spacing', ['64'], '16rem'],
  ['spacing', ['1/5'], '20%'],
  ['spacing', ['3/7'], '42.857143%'],
  ['borderRadius', ['.5rem'], '.5rem'],
  ['fontSize', ['2.5rem'], '2.5rem'],
  ['durations', ['100'], '100ms'],
  ['transitionDelay', ['2s'], '2s'],
  ['opacity', ['50'], '0.5'],
  ['opacity', ['86.54321'], '0.865432'],
  ['rotate', ['180'], '180deg'],
  ['rotate', ['0.25turn'], '0.25turn'],
  ['width', ['screen'], '100vw'],
  ['width', ['px'], '1px'],
  ['width', ['50'], '12.5rem'],
  ['width', ['5/12'], '41.666667%'],
  ['maxWidth', ['30em'], '30em'],
  ['height', ['screen'], '100vh'],
  ['height', ['px'], '1px'],
  ['height', ['96'], '24rem'],
  ['height', ['1/12'], '8.333333%'],
  ['maxHeight', ['36vmin'], '36vmin'],
  ['divideColor', ['current'], 'currentColor'],
  ['divideColor', ['fuchsia'], 'fuchsia'],
  ['divideColor', ['#123456'], '#123456'],
  ['divideColor', ['#aaa'], '#aaa'],
  ['order', ['1'], '1'],
  ['strokeWidth', ['0'], '0'],
  ['transitionTimingFunction', ['ease', 'in', 'out'], 'ease-in-out'],
])('%s: %j => %s', (section, parts, expected) => {
  expect(play(strict).unknown(section as keyof Theme, parts, false, theme)).toBe(expected)
})

test.each([
  ['borderWidth', []],
  ['borderWidth', ['DEFAULT']],
  ['borderWidth', ['1', '2']],
  ['inset', []],
  ['inset', ['DEFAULT']],
  ['inset', ['1', '2']],
  ['transitionDuration', []],
  ['transitionDuration', ['DEFAULT']],
  ['transitionDuration', ['1', '2']],
  ['borderOpacity', []],
  ['borderOpacity', ['DEFAULT']],
  ['borderOpacity', ['1', '2']],
  ['rotate', []],
  ['rotate', ['DEFAULT']],
  ['rotate', ['1', '2']],
  ['maxWidth', []],
  ['maxWidth', ['DEFAULT']],
  ['maxWidth', ['1', '2']],
  ['maxHeight', []],
  ['maxHeight', ['DEFAULT']],
  ['maxHeight', ['1', '2']],
  ['gradientColorStops', []],
  ['gradientColorStops', ['DEFAULT']],
  ['gradientColorStops', ['1', '2']],
  ['strokeWidth', []],
  ['strokeWidth', ['DEFAULT']],
  ['strokeWidth', ['1', '2']],
  ['transitionProperty', []],
])('%s: %j => warning', (section, parts) => {
  const report = {
    unknown: jest.fn(),
    warn: jest.fn(),
  }

  expect(play(report).unknown(section as keyof Theme, parts, false, theme)).toBeUndefined()

  expect(report.unknown).toHaveBeenCalledTimes(1)
  expect(report.unknown).toHaveBeenCalledWith(section, parts, false, theme)
})
