class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) { return true }
    if (this.queueControl.length === this.MAX_SIZE) { return false } // ... your code goes here
  }

  isEmpty() {
    if (this.queueControl.length > 0) { return false }
    else { return true } // ... your code goes here
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.push(item)
      return this.queueControl
    } else {
      throw 'QUEUE_OVERFLOW'
    }// ... your code goes here
  }

  dequeue() {
    if (!this.isEmpty()) {
      this.queueControl.shift()
      return this.queueControl()
    } else {
      throw 'QUEUE_UNDERFLOW'
    }// ... your code goes here
  }

  display() {
    // ... your code goes here
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
