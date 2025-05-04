// linked list is a linear data structre which stores data in form of nodes
// each node stores the actual data and a pointer to the next node in the Linked List

// this is a Node. It stores the value and the pointer to the next Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  // in linked list we have two pointers head and tail
  // the head keeps track of the starting node in the linked list
  #head = null;
  // the tail keeps track of the ending node in the linked list
  #tail = null;
  #length = 0;

  insertAtHead(value) {
    let node = new Node(value);

    let temp = this.#head;

    this.#head = node;
    this.#head.next = temp;

    if (this.isEmpty()) {
      this.#tail = node;
    }
    this.#length++;
  }
  insertAtTail(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.#head = node;
    } else {
      this.#tail.next = node;
    }
    this.#tail = node;
    this.#length++;
  }
  insertAt(index, value) {
    if (index >= this.#length || index < 0) {
      console.log(
        `Index Out of Bounds. Please select an index between ${0} and ${
          this.#length - 1
        }`
      );
      return;
    }

    if (index === 0) {
      this.insertAtHead(value);
      return;
    }

    let temp1 = this.#head;
    let i = 0;
    while (i < index - 1) {
      temp1 = temp1.next;
      i++;
    }

    let node = new Node(value);
    node.next = temp1.next;
    temp1.next = node;
    this.#length++;
  }
  remove() {
    if (this.isEmpty()) {
      console.log("Cannot remove from empty list");
      return;
    }
    let value = this.#head.value;
    this.#head = this.#head.next;
    if (this.#head === null) {
      this.#tail = null;
    }
    this.#length--;
    return value;
  }
  search(value) {
    let temp = this.#head;
    let index = 0;
    while (temp !== null) {
      if (temp.value === value) return index;
      temp = temp.next;
      index++;
    }

    return -1;
  }
  getAt(index) {
    if (this.isEmpty()) {
      console.log("List is empty");
      return null;
    }
    if (index >= this.#length && index < 0) {
      console.log(
        `Index Out of Bounds. Please select an index between ${0} and ${
          this.#length - 1
        }`
      );
      return null;
    }
    if (index === 0) return this.#head.value;
    if (index === this.#length - 1) return this.#tail.value;

    let i = 0;
    let temp = this.#head;
    while (i < index) {
      temp = temp.next;
      i++;
    }

    return temp.value;
  }
  reverse() {
    let prev = null;
    let current = this.#head;

    while (current !== null) {
      let temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }
    this.#tail = this.#head;
    this.#head = prev;
  }
  recursiveReverse(head = this.#head) {
    if (head.next === null) {
      this.#tail = this.#head;
      this.#head = head;
      return;
    }
    this.recursiveReverse(head.next);
    head.next.next = head;
    head.next = null;
  }
  contains(value) {
    let index = this.search(value);

    return index !== -1;
  }
  isEmpty() {
    return this.#head === null;
  }
  getLength() {
    return this.#length;
  }
  print() {
    if (this.isEmpty()) {
      console.log("List is Empty");
    }
    let temp = this.#head;
    let result = [];
    while (temp !== null) {
      result.push(temp.value);
      temp = temp.next;
    }

    console.log(result.join(" -> "));
  }
}

let list = new LinkedList();

list.insertAtTail(1);
list.insertAtHead(3);
list.insertAtTail(0);
list.insertAtHead(-9);
list.insertAt(3, 9);
list.print();
list.reverse();
list.print();
list.recursiveReverse();
list.print();
// console.log(list.search(9));
// console.log(list.getAt(3));
// console.log(list.contains(9));
// console.log("length: ", list.getLength());
// list.remove();
// list.remove();
// list.remove();
// console.log("length: ", list.getLength());
// list.remove();
// list.remove();
// console.log("length: ", list.getLength());
// list.print();
