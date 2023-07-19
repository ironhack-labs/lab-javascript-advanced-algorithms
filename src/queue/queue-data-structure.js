class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true
    } else {
      return false
    }
  }
  // ... your code goes here


  isEmpty() {
    if (!this.queueControl.length) {
      return true
    } else {
      return false
    }
  }// ... your code goes here


  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.push(item)
      return this.queueControl
    } else {
      // throw new Error('QUEUE_OVERFLOW')
      return 'Queue Overflow'
    }
  }
  // ... your code goes here


  dequeue() {
    if (!this.isEmpty()) {
      return this.queueControl.shift()
    } else if (this.isEmpty()) {
      // throw new Error('QUEUE_UNDERFLOW')
      return 'Queue Underflow'
    }// ... your code goes here
  }

  display() {
    return this.queueControl //... your code goes here
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
