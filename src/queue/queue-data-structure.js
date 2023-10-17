class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true
    }
    else {
      return false
    }
    // ... your code goes here
  }

  isEmpty() {
    // ... your 
    if (this.queueControl <= 0) {
      return true
    }
    else {
      return false
    }
  }

  enqueue(item) {
    if (this.enqueue) {
      this.queueControl.push(item)
      return this.queueControl
    }
    else {
      throw new Error('QUEUE_OVERFLOW')
    }

  }

  dequeue() {
    if (!this.isEmpty()) {
      const emptybox = this.queueControl.shift()
      return emptybox
    }
    else {
      throw new Error('QUEUE_UNDERFLOW')

    }

  }

  display() {
    return this.queueControl
    // ... your code goes here
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
