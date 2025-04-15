const arr1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]

const containerWithMostWater = (arr) => {
  let pointer1 = 0
  let pointer2 = arr.length - 1
  let maxWater = Math.min(arr[pointer1], arr[pointer2]) * (pointer2 - pointer1)

  for (let i = 0; i < arr.length; i++) {
    if (pointer1 >= pointer2) {
      break
    } else if (arr[pointer1 + 1] > arr[pointer1]) {
      pointer1++
    } else if (arr[pointer2 - 1] > arr[pointer2]) {
      pointer2--
    } else {
      maxWater = Math.min(arr[pointer1], arr[pointer2]) * (pointer2 - pointer1)
    }
  }

  return maxWater
}
