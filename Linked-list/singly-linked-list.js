class Node {
  constructor(value){
    this.value=value,
    this.next=null
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  } 
  printLinkedList(){
    const arr = []
    let currentNode = this.head;
    while(currentNode){
      arr.push(currentNode.value)
      currentNode = currentNode.next
    }
    return arr
  }
  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  insert(index, value){  
    const newNode = new Node(value)
    if(index >= this.length){
      return this.append(value)
    } 
    if(index ===0){
      return this.prepend(value)
    }
    const leader = this.traverse(index - 1);
    const holdingPoint = leader.next;
    leader.next = newNode;
    newNode.next = holdingPoint;
    this.length++
  }
  traverse(index){
    let counter = 0;
    let curentNode = this.head;
    while(counter !== index){
      curentNode = curentNode.next;
      counter++
    }
    return curentNode
  }
  remove(index){
    if(index === 0){
      const secondNode = this.head.next;
      this.head = secondNode
      this.length--
      return 
    }
    if(index >=this.length){
      return "Index provided is greater than length of the linked list"
    }
    const leader = this.traverse(index - 1)
    const unwantedNode = leader.next;
    const holdingPoint = unwantedNode.next;
    leader.next = holdingPoint;
    this.length--
  }
  lookup(index){
    const leader = this.traverse(index-1);
    const searchedNode = leader.next
    return searchedNode
  }
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList);
