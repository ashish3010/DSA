/* reverse an array */

const arr1 = ["hello", 2, "345", 345, "world"]

const reverseArray = (arr) => {
  const res = []
  let i = arr.length - 1
  while (i >= 0) {
    res.push(arr[i])
    i--
  }

  return res
}
