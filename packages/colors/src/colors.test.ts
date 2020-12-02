import {
  getContrastVariant,
  getShadeVariant,
  getLightVariant,
  isLight,
  getDarkVariant,
} from './colors'

test.each([
  ['#000', false],
  ['#333', false],
  ['#666', false],
  ['#888', false],
  ['#aaa', false],
  ['#bbb', false],
  ['#fcf6e1', true],
  ['#ccc', true],
  ['#ddd', true],
  ['#fff', true],
])('isLight(%j) => %j', (rgb, expected) => {
  expect(isLight(rgb)).toBe(expected)
})

test.each([
  ['#138a08', '#e8f5e7'],
  ['#d0011b', '#f4e4e6'],
  ['#ffc600', '#fcf6e1'],
])('getLightVariant(%j) => %j', (rgb, lighter) => {
  expect(getLightVariant(rgb)).toBe(lighter)
})

test.each([
  ['#138a08', '#061a04'],
  ['#d0011b', '#1c0306'],
  ['#ffc600', '#1e190b'],
])('getDarkVariant(%j) => %j', (rgb, darker) => {
  expect(getDarkVariant(rgb)).toBe(darker)
})

test.each([
  ['#138a08', '#000'],
  ['#d0011b', '#f4e4e6'],
  ['#0d3880', '#e8ecf4'],
  ['#9556b7', '#f7f5f9'],
  ['#001324', '#ebf2f7'],
  ['#1e468c', '#e8ecf2'],
  ['#ffc600', '#1e190b'],
  ['#fbf08b', '#23210e'],
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
  ['#138a08', -0.05, undefined, '#107207'],
  ['#d0011b', -0.05, undefined, '#b70118'],
  ['#0d3880', 0.1, 0.05, '#0b2e69'],
  ['#ffc600', 0.1, 0.05, '#cc9e00'],
  ['#fff', 0.1, undefined, '#e6e6e6'],
  ['#fff', -0.1, undefined, '#ffffff'],
  ['#000', 0.1, undefined, '#1a1a1a'],
  ['#000', -0.1, undefined, '#000000'],
])('getShadeVariant(%j, %s, %s) => %j', (rgb, ifLight, ifDark, expected) => {
  expect(getShadeVariant(rgb, ifLight, ifDark)).toBe(expected)
})
