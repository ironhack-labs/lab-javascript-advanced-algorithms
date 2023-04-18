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

  isEmpty() {
    if (this.queueControl.length === 0) {
      return true
    } if (this.queueControl.length > 0) {
      return false
    } return this.queueControl
  }

  enqueue(item) {
    if (this.canEnqueue() === true) {
      this.queueControl.push(item)
      return this.queueControl
    } else {
      throw new Error('QUEUE_OVERFLOW')
    }
  }

  dequeue() {
    let trashedItem
    if (!this.isEmpty()) {
      trashedItem = this.queueControl.shift()
    }
    else {
      throw new Error('QUEUE_UNDERFLOW')
    }
    return trashedItem
  }

  display() {
    return this.queueControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
