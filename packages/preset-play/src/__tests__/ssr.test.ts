/* eslint-disable tsdoc/syntax */
/**
 * @jest-environment node
 */
/* eslint-enable tsdoc/syntax */

import type { Theme } from '@beamwind/types'

import { strict, theme } from '@beamwind/core'
import { play } from '../play'

// Simulate non-browser enviroment
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (globalThis as any).Option

test.each([
  ['ringColor', ['current'], 'currentColor'],
  ['ringColor', ['#123456'], '#123456'],
  ['ringColor', ['#aaa'], '#aaa'],
])('%s: %j => %s', (section, parts, expected) => {
  expect(play(strict).unknown(section as keyof Theme, parts, false, theme)).toBe(expected)
})

test.each([
  ['ringColor', ['fuchsia'], 'fuchsia'],
])('%s: %j => warning', (section, parts) => {
  const report = {
    unknown: jest.fn(),
    warn: jest.fn(),
  }

  expect(play(report).unknown(section as keyof Theme, parts, false, theme)).toBeUndefined()

  expect(report.unknown).toHaveBeenCalledTimes(1)
  expect(report.unknown).toHaveBeenCalledWith(section, parts, false, theme)
})
