class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor(data) {
    const newNode = new Node(data);
    this.head = newNode;
    this.tail = newNode;
  }

  addNode(newValue) {
    const newNode = new Node(newValue);
    this.tail.next = newNode;
    this.tail = newNode;
  }
}

let list = new List();
list.addNode(400);
list.addNode(600);
console.log()

console.log(list);