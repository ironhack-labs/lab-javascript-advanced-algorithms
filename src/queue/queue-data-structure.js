class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here
    if (this.queueControl.length < this.MAX_SIZE) {
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
    if (this.canEnqueue()) {
      this.queueControl.push(item)
    } else {
      throw new Error('QUEUE_OVERFLOW')
    }

    return this.queueControl
  }

  dequeue() {
    // ... your code goes here
    if (!this.isEmpty()) {
      const pop = this.queueControl.shift()
      return pop
    } else {
      throw new Error('QUEUE_UNDERFLOW')
    }
  }

  display() {
    // ... your code goes here
    return this.queueControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
