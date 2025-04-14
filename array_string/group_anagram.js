const arr1 = ["eat", "tea", "tan", "ate", "nat", "bat", "aab", "abb"]

const groupAnagram = (arr) => {
  const obj = {}

  for (let str of arr) {
    const key = str.split("").sort().join("")

    if (!obj[key]) {
      obj[key] = []
    }
    obj[key].push(str)
  }

  return Object.values(obj)
}
