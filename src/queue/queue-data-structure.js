class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here
    return this.queueControl < this.MAX_SIZE
  }

  isEmpty() {
    // ... your code goes here
    return this.queueControl.length === 0
  }

  enqueue(item) {
    // ... your code goes here
      if (this.canEnqueue()) {
      this.queueControl.unshift(item)
      return this.queueControl
    } else {
      throw new Error('QUEUE_OVERFLOW')
    }
  }

  dequeue() {
    // ... your code goes here

  }

  display() {
    // ... your code goes here
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
