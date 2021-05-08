function validateFormatOfNumbers(numbers) {
  if (Array.isArray(numbers)) {
    if (numbers.length > 0 && numbers.every((value) => value >= 1 && value <= 99)) {
      return true
    }
    return false
  }
  return false
}

function countDuplicatedNumber(numbers) {
  let countNumber = {}
  for (i = 0; i < numbers.length; i++) {
    if (countNumber[numbers[i]]) {
      countNumber[numbers[i]] += 1
    } else {
      countNumber[numbers[i]] = 1
    }
  }
  return countNumber
}

function summaryDuplicatedNumber(countNumber) {
  let duplicatedNumbers = []
  for (const c in countNumber) {
    if (countNumber[c] > 1) {
      duplicatedNumbers.push(c)
    }
  }
  return duplicatedNumbers.join()
}

function findDuplicatedNumber(numbers) {
  const isPass = validateFormatOfNumbers(numbers)
  if (!isPass) {
    return false
  }

  let countNumber = countDuplicatedNumber(numbers)
  return summaryDuplicatedNumber(countNumber)
}

module.exports = findDuplicatedNumber
