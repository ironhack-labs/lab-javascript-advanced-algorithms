class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length === this.MAX_SIZE) {
      return false
    } else {
      return true
    }
  }

  isEmpty() {
    if (this.queueControl.length === 0) {
      return true
    } else {
      return false
    }
  }

  enqueue(item) {
    if (!this.canEnqueue(item)) {
      throw new Error("QUEUE_OVERFLOW")
    } else {
      this.queueControl.push(item)
    }
    return this.queueControl
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.queueControl.shift()
    } else {
      throw new Error("QUEUE_UNDERFLOW")
    }
  }

  display() {
    return this.queueControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
