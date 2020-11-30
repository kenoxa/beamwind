import { strict, theme } from '@beamwind/core'
import type { Theme } from '@beamwind/types'
import { play } from './play'

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
  ['durations', ['100'], '100ms'],
  ['opacity', ['50'], '0.5'],
  ['opacity', ['86.54321'], '0.865432'],
  ['rotate', ['180'], '180deg'],
  ['rotate', ['0.25turn'], '0.25turn'],
  ['width', ['screen'], '100vw'],
  ['width', ['px'], '1px'],
  ['width', ['50'], '12.5rem'],
  ['width', ['5/12'], '41.666667%'],
  ['height', ['screen'], '100vh'],
  ['height', ['px'], '1px'],
  ['height', ['96'], '24rem'],
  ['height', ['1/12'], '8.333333%'],
  ['height', ['36vmin'], '36vmin'],
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
