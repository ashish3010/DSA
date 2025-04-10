const str1 = "Hello"
const str2 = "lloeh"

const checkAnagram = (string1, string2) => {
  const str1 = string1.toLowerCase()
  const str2 = string2.toLowerCase()

  let res = false
  if (str1.length !== str2.length) {
    return false
  }
  for (let i of str1) {
    if (str2.includes(i)) {
      res = true
    } else {
      return false
    }
  }
  return res
}
