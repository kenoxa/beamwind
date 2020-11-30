import { sortedInsertionIndex } from '../util'

test.each([
  [[], 1, 0],
  [[0], 1, 1],
  [[1], 0, 0],
  [[1, 2], 0, 0],
  [[1, 2], 1, 1],
  [[1, 2], 2, 2],
  [[1, 2], 3, 2],
  [[1, 2, 3], 0, 0],
  [[1, 2, 3], 1, 1],
  [[1, 2, 3], 2, 2],
  [[1, 2, 3], 3, 3],
  [[1, 2, 3], 4, 3],
  [[1, 2, 3, 4], 0, 0],
  [[1, 2, 3, 4], 1, 1],
  [[1, 2, 3, 4], 2, 2],
  [[1, 2, 3, 4], 3, 3],
  [[1, 2, 3, 4], 4, 4],
  [[1, 2, 3, 4], 5, 4],
])('sortedInsertionIndex(%j, %s) => %s', (array, element, index) => {
  expect(sortedInsertionIndex(array, element)).toBe(index)
})
