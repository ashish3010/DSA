const val = "Hello World"

const stringReverse = (str) => {
  const arr = []
  const strLength = str.length
  for (let i = 0; i < strLength; i++) {
    arr.push(str[strLength - 1 - i])
  }
  return arr.join("")
}
