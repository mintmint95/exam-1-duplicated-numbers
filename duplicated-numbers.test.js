const findDuplicatedNumber = require('./duplicated-numbers.js')

test('Case1: Find duplicated number in [2, 4, 88, 2, 78, 88, 34, 88] to equal 2, 88', () => {
  //Duplicated first and last in array
  const input = [2, 4, 88, 2, 78, 88, 34, 88]
  const result = findDuplicatedNumber(input)
  expect(result).toBe('2,88')
})

test('Case2: Find duplicated number in [2, 4, 4, 4, 78, 4, 34, 88] to equal 4', () => {
  //Duplicated in center of array
  const input = [2, 4, 4, 4, 78, 4, 34, 88]
  const result = findDuplicatedNumber(input)
  expect(result).toBe('4')
})

test('Case3: Input data is an empty array to return false', () => {
  const input = []
  const result = findDuplicatedNumber(input)
  expect(result).toBe(false)
})

test('Case4: Input data is null to return false', () => {
  const input = null
  const result = findDuplicatedNumber(input)
  expect(result).toBe(false)
})

test('Case5: Input data is true to return false', () => {
  const input = true
  const result = findDuplicatedNumber(input)
  expect(result).toBe(false)

})

test('Case6: Input data is false to return false', () => {
  const input = false
  const result = findDuplicatedNumber(input)
  expect(result).toBe(false)
})

test('Case7: Input data is incorrect (Numbers not match 0 - 99) to return false', () => {
  const input = [2, 4, 88, 2, 78, 88, 34, 99.99]
  const result = findDuplicatedNumber(input)
  expect(result).toBe(false)
})

test('Case8: Input data have minus number to return false', () => {
  const input = [-2.5, -4, 88, 2, 78, 88, 34, 88]
  const result = findDuplicatedNumber(input)
  expect(result).toBe(false)
})

test('Case9: Input data have space to return false', () => {
  const input = ' '
  const result = findDuplicatedNumber(input)
  expect(result).toBe(false)
})

test('Case10: Input data as string to return false', () => {
  const input = 'test'
  const result = findDuplicatedNumber(input)
  expect(result).toBe(false)
  console.log(typeof(input))
})
