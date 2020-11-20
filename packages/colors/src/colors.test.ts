import { getContrastVariant, getShadeVariant, getLightVariant } from './colors'

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
])('getContrastVariant(%j) => %j', (rgb, contrast) => {
  expect(getContrastVariant(rgb)).toBe(contrast)
})

test.each([
  ['#138a08', 0.05, -0.05, '#16a209'],
  ['#d0011b', 0.05, -0.05, '#e9011e'],
  ['#0d3880', 0.1, 0.05, '#0b2e69'],
  ['#ffc600', 0.1, 0.05, '#cc9e00'],
])('getShadeVariant(%j, %s, %s) => %j', (rgb, darker, lighter, expected) => {
  expect(getShadeVariant(rgb, darker, lighter)).toBe(expected)
})
