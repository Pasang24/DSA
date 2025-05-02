import Queue from "./queue.js";

// function to reverse a queue using recursion
function reverseQueue(queue) {
  // if the queue is empty then return
  if (queue.isEmpty()) return;
  // first dequeue the first element
  const front = queue.dequeue();
  // then reverse the remaining queue recursively
  reverseQueue(queue);
  // then finally enqueue the first element to the end
  queue.enqueue(front);
}

let queue = new Queue(10);

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

console.log("Original Queue:");
queue.print();

reverseQueue(queue);
console.log("Reversed Queue:");
queue.print();
