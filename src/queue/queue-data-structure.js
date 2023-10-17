class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here
    if (this.queueControl.length == this.MAX_SIZE) {
      return false
    } else {
      return true
    }
  }

  isEmpty() {
    // ... your code goes here
    if (this.queueControl.length == 0) {
      return true
    } else {
      return false
    }
  }

  enqueue(item) {
    // ... your code goes here
    if (!this.canEnqueue()) {
      throw new Error("QUEUE_OVERFLOW")
    } else {
      this.queueControl.push(item)
      return this.queueControl
    }
  }

  dequeue() {
    // ... your code goes here
    if (!this.isEmpty()) {
      const element = this.queueControl.shift()
      return element
    } else {
      throw new Error("QUEUE_UNDERFLOW")
    }
  }

  display() {
    // ... your code goes here
    return this.queueControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
