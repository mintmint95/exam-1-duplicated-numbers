function findDuplicatedNumber(numbers) {
  let countNumber = {}
  let duplicatedNumbers = []

  if (numbers === null || numbers === true || numbers === false || numbers.length === 0) {
    return false
  }
  if (!numbers.length) {
    return false
  }

  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] === null || numbers[i] === true || numbers[i] === false || numbers[i] < 0 || numbers[i] > 99 || typeof numbers[i] !== 'number') {
      return false
    }
    if (countNumber[numbers[i]]) {
      countNumber[numbers[i]] += 1
    } else {
      countNumber[numbers[i]] = 1
    }
  }
  for (const c in countNumber) {
    if (countNumber[c] > 1) {
      duplicatedNumbers.push(c)
    }
  }
  return duplicatedNumbers.join()
}

module.exports = findDuplicatedNumber
