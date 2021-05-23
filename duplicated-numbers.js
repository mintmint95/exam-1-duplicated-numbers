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

function mapDuplicatedToArray(numbers) {
  let countNumber = countDuplicatedNumber(numbers)
  let tempDuplicate = []
  for (const c in countNumber) {
    if (countNumber[c] > 1) {
      tempDuplicate.push({
        number: c,
        duplicate: countNumber[c]
      })
    }
  }
  return tempDuplicate
}

function sortDuplicatedDesc(numbers) {
  let duplicateNumber = mapDuplicatedToArray(numbers)
  let arrSortMaxToMin = duplicateNumber.sort((a, b) => (b.duplicate - a.duplicate))
  let resultDesc = []
  for (const a of arrSortMaxToMin) {
    resultDesc.push(a.number)
  }
  return resultDesc.join()
}

function sortDuplicatedAsc(numbers) {
  let duplicateNumber = mapDuplicatedToArray(numbers)
  let arrSortMinToMax = duplicateNumber.sort((a, b) => (a.duplicate - b.duplicate))
  let resultAsc = []
  for (const a of arrSortMinToMax) {
    resultAsc.push(a.number)
  }
  return resultAsc.join()
}

function sortMaxDuplicated(numbers) {
  let duplicateNumber = mapDuplicatedToArray(numbers)
  let arrSortMaxToMin = duplicateNumber.sort((a, b) => (b.duplicate - a.duplicate))
  let resultDesc = []
  for (const a of arrSortMaxToMin) {
    resultDesc.push(a.number)
  }
  return resultDesc[0]
}

function sortMinDuplicated(numbers) {
  let duplicateNumber = mapDuplicatedToArray(numbers)
  let arrSortMinToMax = duplicateNumber.sort((a, b) => (a.duplicate - b.duplicate))
  let resultAsc = []
  for (const a of arrSortMinToMax) {
    resultAsc.push(a.number)
  }
  return resultAsc[0]
}

//module.exports = findDuplicatedNumber
module.exports = {
  findDuplicatedNumber, 
  sortDuplicatedDesc,
  sortDuplicatedAsc,
  sortMaxDuplicated,
  sortMinDuplicated
}