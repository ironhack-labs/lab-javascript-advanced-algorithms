class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here
    return this.queueControl.length < this.MAX_SIZE;
  }

  isEmpty() {
    // ... your code goes here
    return this.queueControl.length == 0;
  }

  enqueue(item) {
    // ... your code goes here
    if (this.canEnqueue()) this.queueControl.push(item);
    else throw new Error('QUEUE_OVERFLOW');

    return this.queueControl;
  }

  dequeue() {
    // ... your code goes here
    let removedItem = ''
    if (!this.isEmpty()) removedItem = this.queueControl.shift();
    else throw new Error('QUEUE_UNDERFLOW');

    return removedItem;
  }

  display() {
    // ... your code goes here
    return this.queueControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
