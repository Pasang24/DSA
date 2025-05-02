// a min stack is just like a regular stack with an additional method getMin() which returns the smallest element in the stack at any point
// the getMin() must take O(1) time to return the smallest elememt

export default class MinStack {
  #data = [];
  #top = -1;
  #capacity;

  constructor(capacity) {
    this.#capacity = capacity;
  }

  push(value) {
    if (this.isFull()) {
      console.log("Stack is Full");
      return;
    }
    // whenever we push a new element we also push the smallest element at the point when the element was pushed
    let currentMin = value;
    if (!this.isEmpty()) {
      currentMin = Math.min(currentMin, this.#data[this.#top].currentMin);
    }
    this.#data[++this.#top] = { value, currentMin };
  }
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is Empty");
      return;
    }
    return this.#data[this.#top--];
  }
  top() {
    if (this.isEmpty()) return null;

    return this.#data[this.#top].value;
  }
  getMin() {
    if (this.isEmpty()) return null;

    return this.#data[this.#top].currentMin;
  }
  isFull() {
    return this.#top === this.#capacity - 1;
  }
  isEmpty() {
    return this.#top === -1;
  }
}

let minStack = new MinStack(5);

minStack.push(-2);
minStack.push(0);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());
minStack.push(-10);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());

/*
    MinStack
| value | currentMin |
| -2    |    -2      |
| 0     |    -2      |
|-10    |    -10     | <- The stack keeps track of the smallest element in every push and pop
*/
