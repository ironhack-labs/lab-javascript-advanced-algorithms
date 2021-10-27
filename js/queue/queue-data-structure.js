class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here
    if (this.queueControl.length === 0) {
      return true
    } else {
      return false
    }
  }

  isEmpty() {
    // ... your code goes here
    if (this.queueControl.length === 0) {
      return true
    } else {
      return false
    }
  }

  enqueue(item) {
    // ... your code goes here
    if (this.queueControl.length === this.MAX_SIZE) {
      throw new Error("QUEUE_OVERFLOW")

    }
    this.queueControl.push(item)
    return this.queueControl
  }

  dequeue() {
    // ... your code goes here
    if (this.queueControl.length === 0) {
      throw Error("QUEUE_UNDERFLOW")
    }
    return this.queueControl.shift(this.canEnqueue.length -1)
  }

  display() {
    // ... your code goes here
    return this.queueControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
