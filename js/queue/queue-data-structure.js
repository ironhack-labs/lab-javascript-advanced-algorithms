class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here
    if (this.queueControl.length < this.MAX_SIZE) {
      return true
    }

    else if (this.queueControl.length >= this.MAX_SIZE) {
      return false
    }
  }

  isEmpty() {
    // ... your code goes here
    if (this.queueControl.length === 0) {
      return true
    }
    else {
      return false
    }
  }

  enqueue(item) {
    // ... your code goes here
    if (this.canEnqueue() === true) {
      this.queueControl.unshift(item)
      this.queueControl.reverse()
      // return this.reversedArr
      return this.queueControl
    }
    if (this.canEnqueue() === false) {
      throw new Error('QUEUE_OVERFLOW');
    }
  }

  dequeue() {
    // ... your code goes here
    if (this.isEmpty() === true) {
      throw new Error('QUEUE_UNDERFLOW');
    }
    if (this.isEmpty() === false) {
      let shiftedElement = this.queueControl.shift()
      return shiftedElement
    }

  }

  display() {
    // ... your code goes here
    return this.queueControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
