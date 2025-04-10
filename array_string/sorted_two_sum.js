const arr = [2, 7, 11, 15]
const target = 17

const twoSum = (arr, target) => {
  let x = 0
  let y = arr.length - 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[x] + arr[y] > target) {
      y--
    } else if (arr[x] + arr[y] < target) {
      x++
    } else {
      return [x, y]
    }
  }
}
