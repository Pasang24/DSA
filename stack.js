// stack is a linear data structure which works in LIFO(Last In First Out) which means the element that was added last will always come out first
// it only has one entry and exit point for elements i.e elements can be inserted or removed only from the top of the stack
export default class Stack {
  // we will make these member functions as private since we don't want users to access them directly
  // instead we provide them other public methods to access these values in the stack

  // we store our elements in this data array
  #data = [];
  // the top variable keeps track of the element at the top of the stack
  #top = 0;
  // the capacity of the stack determines how many elements can be kept in the stack
  #capacity;

  // the constructor takes the capacity of stack as argument
  constructor(capacity) {
    this.#capacity = capacity;
  }

  // methods that can be used in a stack

  // this method adds a new element at the top of the stack
  push(val) {
    if (this.isFull()) {
      console.log("Stack is Full");
      return;
    }
    this.#data[this.#top++] = val;
  }
  // this method removes and returns the element at the top of the stack
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    return this.#data[--this.#top];
  }
  // this method returns the top element of the stack but does't remove it
  peek() {
    return this.isEmpty() ? null : this.#data[this.#top - 1];
  }
  // this method checks if the stack is full
  isFull() {
    return this.#top === this.#capacity;
  }
  // this method checks if the stack is empty
  isEmpty() {
    return this.#top === 0;
  }
  // this method clears the stack
  clear() {
    this.#data = [];
    this.#top = 0;
  }
  // this method returns the number of elements on the stack
  size() {
    return this.#top;
  }
  // this method prints all the elemets in the stack from top to bottom
  print() {
    for (let i = this.#top - 1; i >= 0; i--) {
      console.log(this.#data[i]);
    }
  }
}

// const stack = new Stack(10);

// stack.push(2);
// stack.push(5);
// stack.push(0);
// stack.push(6);
// stack.push(2);
// stack.push(5);
// stack.push(0);
// stack.push(6);
// stack.push(2);
// stack.push(5);
// stack.push(5);
// stack.pop();
// stack.pop();
// stack.pop();
// stack.print();
// stack.clear();
