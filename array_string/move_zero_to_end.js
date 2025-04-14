/* move zero to end */

const arr1 = [0, 1, 0, 3, 12]

const moveZeroToEnd = (arr) => {
  const res = []
  const zeroRes = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      res.push(arr[i])
    } else {
      zeroRes.push(arr[i])
    }
  }

  return [...res, ...zeroRes]
}

// optimal solution
const moveZeroToEnd = (arr) => {
  let i = 0
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++
    }
  }
  return arr
}
