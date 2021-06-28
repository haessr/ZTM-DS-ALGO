//let linkedListStructure = {
//  head: {
//    value: 10,
//    next: {
//      value: 5,
//      next: {
//        value: 16,
//        next: null
//      }
//    }
//  }
//}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class myLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value); 
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value); 
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }

  insert(index, value) {
    // check params
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    if (index >= this.length) {
      this.append(value) 
      return this.printList();
    }

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  remove(index) {
    //check params
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  traverseToIndex(index) {
    //check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next
      counter++;
    }
    return currentNode;
  }
}

const linkedList = new myLinkedList(10);
console.log(linkedList.append(5));
console.log(linkedList.append(16));
console.log(linkedList.prepend(1));
linkedList.printList();
linkedList.insert(2, 99);
linkedList.insert(0, 100);
linkedList.insert(20, 200);
linkedList.remove(2);
//linkedList.printList();
