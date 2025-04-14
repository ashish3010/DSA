const arr1 = [6, 5, 1, 7]
const k = 9

const twoSumEasy = (arr, target) => {
  const obj = {}
  let res = []

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      continue
    } else {
      obj[arr[i]] = i
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (obj[target - arr[i]]) {
      res = [i, obj[target - arr[i]]]
      break
    } else {
      continue
    }
  }

  return res
}
