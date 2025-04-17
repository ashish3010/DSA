const s = "aab"
const t = "bba"

const checkAnagram = (string1, string2) => {
  const str1 = string1.toLowerCase()
  const str2 = string2.toLowerCase()
  
  if (str1.length !== str2.length) {
    return false
  }
  let res = false
  const obj = {}
  const obj2 = {}
  for (let i of str1) {
    if (obj[i]) {
      obj[i]++
    } else {
      obj[i] = 1
    }
  }

  for (let i of str2) {
    if (obj2[i]) {
      obj2[i]++
    } else {
      obj2[i] = 1
    }
  }

  for (let i of str2) {
    if (obj2[i] !== obj[i]) {
      res = false
      break
    } else {
      res = true
    }
  }
  
  return res
}
