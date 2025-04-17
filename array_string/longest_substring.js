const arr1 = [100, 4, 200, 1, 3, 2]

const checkLongestConsecutive = (arr) => {
  if (!arr.length) {
    return 0
  }

  const obj = {}
  let max = 1

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = true
  }

  for (let i = 0; i < arr.length; i++) {
    let currentVal = arr[i]
    let count = 1
    if (!obj[currentVal - 1]) {
      let nextVal = currentVal + 1
      while (obj[nextVal]) {
        count++
        nextVal++
      }
    }

    max = Math.max(max, count)
  }

  return max
} 

/* using SET */
const longestConsecutive = (arr) => {
  const arrSet = new Set(arr)
  let max = 0

  for (let i of arrSet) {
    if (!arrSet.has(i - 1)) {
      let count = 1
      let currentVal = i
      let nextVal = currentVal + 1
      while (arrSet.has(nextVal)) {
        count++
        nextVal++
      }
      
      max = Math.max(max, count)
    }
  }
  
  return max
}
