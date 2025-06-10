class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item
    this.length++
    return this.length
  }

  pop() {
    delete this.data[this.length - 1]
    this.length--
    return this.length
  }

  delete(index) {
    const lastItem = this.data[index]
    this.shiftItems(index)
    return lastItem
  }

  shiftItems(index) {
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
  }

  replace(item, newItem) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === item) {
        this.data[i] = newItem
        break
      }
    }
    return this.data
  }

  replaceAll(item, newItem) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === item) {
        this.data[i] = newItem
      }
    }
    return this.data
  }

  join(item='') {
    let str = this.data[0]
    for (let i = 1; i < this.length; i++) {
      if (this.data[i] !== "") {
        str = str + item + this.data[i]
      }
    }
    return str
  }
  
}

const newArr = new MyArray()
console.log(newArr)
