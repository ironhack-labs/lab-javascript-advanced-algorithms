//*Queues with FIFO data structure.
class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here
    if (this.queueControl.length !== this.MAX_SIZE) return true;
    return false;
  }

  isEmpty() {
    // ... your code goes here
    if (this.queueControl.length !== 0) return false;
    return true;
  }

  enqueue(item) {
    // ... your code goes here
    if (this.canEnqueue()) {
      this.queueControl.unshift(item);
      return this.queueControl;
    } else {
      throw new Error("QUEUE_OVERFLOW");
    }
  }

  dequeue() {
    // ... your code goes here
    if (!this.isEmpty()) {
      return this.queueControl.pop();
    } else {
      throw new Error("QUEUE_UNDERFLOW");
    }
  }

  display() {
    // ... your code goes here
    return this.queueControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== "undefined") module.exports = Queue;

//for testing =>
//const queue = new Queue();
//console.dir(queue);
//console.log(queue.MAX_SIZE);
//console.log(queue.canEnqueue());
//console.log(queue.dequeue());
//queue.enqueue(19); // enqueue first Item
//queue.enqueue(88); // enqueue next Item
//console.log(queue.queueControl); // returns the order [88, 19], this should be correct?!
//const firstQueueItem = queue.dequeue(); //should be 19
//console.log(firstQueueItem);
//const nextQueueItem = queue.dequeue();
//console.log(nextQueueItem);
