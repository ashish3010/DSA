/* move zero to end */

const arr1 = [0, 1, 0, 3, 12]

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
