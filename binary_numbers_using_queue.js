import CircularQueue from "./circular_queue.js";

// function to print binary numbers from decimal 1 to N using queue
function printBinary(n) {
  let queue = new CircularQueue(n);

  queue.enqueue("1");

  while (n > 0) {
    let value = queue.dequeue();

    console.log(value);

    queue.enqueue(value + "0");
    queue.enqueue(value + "1");
    n--;
  }
}

printBinary(5);
