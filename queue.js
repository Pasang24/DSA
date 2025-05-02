// Queue is a linear data structure which works on FIFO(First In First Out) principle

export default class Queue {
  #data = [];
  #front = -1;
  #rear = -1;
  #capacity;

  constructor(capacity) {
    this.#capacity = capacity;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log("Queue is Full");
      return;
    }
    // if the queue is empty then incremenent the front pointer too
    if (this.isEmpty()) {
      this.#front++;
    }
    this.#data[++this.#rear] = value;
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return;
    }
    // if there is only one element in the queue
    if (this.#front === this.#rear) {
      let value = this.#data[this.#front];
      this.#front = -1;
      this.#rear = -1;
      return value;
    } else {
      return this.#data[this.#front++];
    }
  }
  peek() {
    if (this.isEmpty()) return null;
    return this.#data[this.#front];
  }
  isFull() {
    return this.#rear === this.#capacity - 1;
  }
  isEmpty() {
    return this.#front === -1 && this.#rear === -1;
  }
  print() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return;
    }
    for (let i = this.#front; i <= this.#rear; i++) {
      console.log(this.#data[i]);
    }
  }
}

// let queue = new Queue(10);

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// queue.enqueue(8);
// queue.enqueue(9);
// queue.enqueue(10);
// queue.dequeue();
// queue.enqueue(10);
// queue.print();
