class Node {
  constructor(value){
    this.value=value,
    this.next=null
  }
}

class Stack{
  constructor(){
    this.top=null,
    this.bottom=null,
    this.length=0
  }
  peek(){
    return this.top
  }
  push(value){
    const newNode = new Node(value)
   if(this.length === 0){
     this.top = newNode;
     this.bottom = newNode
   }else{
     const holdingPoint = this.top
     this.top = newNode;
     this.top.next = holdingPoint
   }
   this.length++
  }
  pop(){
    if(this.length===0){
      return null
    }
    if(this.length === 1){
      this.bottom = null;
    }
    this.top = this.top.next
    this.length--
  }
}


const myStack = new Stack()
console.log(myStack)
