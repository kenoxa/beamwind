import { getContrastVariant, getShadeVariant, getLightVariant, isLight } from './colors'

test.each([
  ['#000', false],
  ['#333', false],
  ['#666', false],
  ['#888', false],
  ['#aaa', false],
  ['#bbb', false],
  ['#ccc', true],
  ['#ddd', true],
  ['#fff', true],
])('isLight(%j) => %j', (rgb, expected) => {
  expect(isLight(rgb)).toBe(expected)
})

test.each([
  ['#138a08', '#e8f5e7'],
  ['#d0011b', '#f4e4e6'],
])('getLightVariant(%j) => %j', (rgb, light) => {
  expect(getLightVariant(rgb)).toBe(light)
})

test.each([
  ['#138a08', '#000'],
  ['#d0011b', '#f4e4e6'],
  ['#0d3880', '#e8ecf4'],
  ['#9556b7', '#f7f5f9'],
  ['#001324', '#ebf2f7'],
  ['#1e468c', '#e8ecf2'],
  ['#000', '#f2f2f2'],
  ['#333', '#efefef'],
  ['#666', '#ececec'],
  ['#888', '#000'],
  ['#aaa', '#000'],
  ['#ccc', '#191919'],
  ['#ddd', '#1a1a1a'],
  ['#fff', '#1c1c1c'],
])('getContrastVariant(%j) => %j', (rgb, contrast) => {
  expect(getContrastVariant(rgb)).toBe(contrast)
})

test.each([
  ['#138a08', 0.05, undefined, '#16a209'],
  ['#d0011b', 0.05, undefined, '#e9011e'],
  ['#0d3880', 0.1, 0.05, '#0b2e69'],
  ['#ffc600', 0.1, 0.05, '#cc9e00'],
  ['#fff', 0.1, undefined, '#e6e6e6'],
  ['#fff', -0.1, undefined, '#ffffff'],
  ['#000', 0.1, undefined, '#1a1a1a'],
  ['#000', -0.1, undefined, '#000000'],
])('getShadeVariant(%j, %s, %s) => %j', (rgb, darker, lighter, expected) => {
  expect(getShadeVariant(rgb, darker, lighter)).toBe(expected)
})
