const numberList = [
  1, 1, 1, 3, 4, 3, 6, 2, 4, 1, 3, 5, 4, 2, 4, 7, 6, 3, 8, 6, 3, 1,
]

//using Set constructor
const removeDuplicatesUsingSet = (arr) => {
  const res = new Set(arr)

  return [...res]
}

const removeDuplicates = (arr) => {
  const obj = {}
  const res = []

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      continue
    } else {
      res.push(arr[i])
      obj[arr[i]] = true
    }
  }
  
  return res
}
