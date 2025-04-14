const arr1 = [6, 5, 1, 7]
const k = 9

const twoSumEasy = (arr, target) => {
  const obj = {}
  let res = []

  for (let i = 0; i < arr1.length; i++) {
    if (obj[arr1[i]]) {
      continue
    } else {
      obj[arr1[i]] = i
    }
  }

  for (let i = 0; i < arr1.length; i++) {
    if (obj[k - arr[i]]) {
      res = [i, obj[k - arr[i]]]
      break
    } else {
      continue
    }
  }

  return res
}
