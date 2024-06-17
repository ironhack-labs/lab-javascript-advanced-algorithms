class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length === this.MAX_SIZE) {
      return false
    }
    return true
  }

  isEmpty() {
    if (this.queueControl.length > 0) {
      return false
    }
    return true
  }

  enqueue(item) {
    if (!this.canEnqueue()) {
      throw new Error('QUEUE_OVERFLOW')
    }
    this.queueControl.push(item)
    return this.queueControl
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('QUEUE_UNDERFLOW')
    }
    return this.queueControl.shift()
  }

  display() {
    return this.queueControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
