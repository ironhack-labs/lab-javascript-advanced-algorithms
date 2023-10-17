class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here
    if (this.queueControl.length === 0) {
      return true
    }
    return false

  }

  isEmpty() {
    // ... your code goes here
    if (this.queueControl.length === 0) {
      return true
    }
    return false
  }

  enqueue(item) {
    if (this.queueControl.length < this.MAX_SIZE) {
      this.queueControl.push(item)
      return this.queueControl
    }
    else {
      throw new Error('QUEUE_OVERFLOW');
    }
  }

  dequeue() {
    // ... your code goes here
    if (this.queueControl.length === 0) {
      throw new Error('QUEUE_UNDERFLOW')
    } else {
      const deletedQI = this.queueControl.shift()
      return deletedQI
    }

  }

  display() {
    // ... your code goes here
    return this.queueControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
