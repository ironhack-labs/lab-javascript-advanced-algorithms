class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) { return true }
    if (this.queueControl.length === this.MAX_SIZE) {
      return false
    }
  }

  isEmpty() {
    if (!this.queueControl.length) { return true }
    else {
      return false
    }
  }

  enqueue(item) {
    if (!this.canEnqueue()) {
      throw new Error('QUEUE_OVERFLOW')
    }
    else { this.queueControl.push(item) }
    return this.queueControl
  }

  dequeue() {
    if (this.isEmpty()) { throw new Error('QUEUE_UNDERFLOW') }
    else {
      let poppedItem = this.queueControl.shift()
      return poppedItem
    }
  }

  display() {
    return this.queueControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
