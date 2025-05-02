// a circular queue is a modified version of linear queue which makes efficient utilization of memory
// linear queue had problem of unused space when the rear reached the capacity but there was still space on the left side of the front
// circular queue makes sure those unused space are utilized by the rear to add new elements in the queue

export default class CircularQueue {
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
    if (this.isEmpty()) {
      this.#front++;
    }
    let rear = (this.#rear + 1) % this.#capacity;
    this.#data[rear] = value;
    this.#rear = rear;
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return;
    }
    let value = this.#data[this.#front];
    if (this.#front === this.#rear) {
      this.#front = -1;
      this.#rear = -1;
    } else {
      this.#front = (this.#front + 1) % this.#capacity;
    }
    return value;
  }
  peek() {
    if (this.isEmpty()) return null;

    return this.#data[this.#front];
  }
  isFull() {
    return (this.#rear + 1) % this.#capacity === this.#front;
  }
  isEmpty() {
    return this.#front === -1 && this.#rear === -1;
  }
  print() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return;
    }
    if (this.#front <= this.#rear) {
      for (let i = this.#front; i <= this.#rear; i++) {
        console.log(this.#data[i]);
      }
    } else {
      for (let i = this.#front; i < this.#capacity; i++) {
        console.log(this.#data[i]);
      }
      for (let i = 0; i <= this.#rear; i++) {
        console.log(this.#data[i]);
      }
    }
  }
}

let queue = new CircularQueue(10);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
queue.enqueue(9);
queue.enqueue(10);
queue.dequeue();
queue.dequeue();
queue.enqueue(1);
queue.enqueue(2);
queue.print();
