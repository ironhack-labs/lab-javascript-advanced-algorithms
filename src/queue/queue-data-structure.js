class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here
    if (!this.queueControl.length) {
      return true
    } else {
      return false
    }
  }

  isEmpty() {
    // ... your code goes here
    if (!this.queueControl.length) {
      return true
    } else {
      return false
    }
  }

  enqueue(item) {
    // ... your code goes here
    if (this.queueControl.length - 1 === this.MAX_SIZE) {
      return 'Queue Overflow'
    }
    this.queueControl.push(item)
    return this.queueControl
  }

  dequeue(item) {
    // ... your code goes here
    if (!this.queueControl.length) {
      return 'Queue Underflow'
    }
    return this.queueControl.shift(item)
  }

  display() {
    // ... your code goes here
    return this.queueControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
