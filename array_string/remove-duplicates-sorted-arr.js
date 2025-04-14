const numberList = [1, 2, 2, 3, 3, 3, 5, 5, 7, 7, 9]

const removeDuplicates = (arr) => {
  if (!arr.length) {
    return false
  }
  const getLength = () => {
    let i = 0
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] !== arr[i]) {
        i++
        arr[i] = arr[j]
      }
    }
    return i + 1
  }
  const newLength = getLength()
  return arr.slice(0, newLength)
}
