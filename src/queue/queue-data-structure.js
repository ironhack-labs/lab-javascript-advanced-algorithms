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
    if (this.queueControl.length > 0) {
      return false
    } else {
      return true
    }
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.push(item)
      return this.queueControl
    } else {
      return 'Queue Overflow'
    }
  }

  dequeue() {
    if (this.queueControl.length === 0) {
      return 'Queue Underflow'
    } else {
      return this.queueControl.shift()
    }
  }

  display() {
    return this.queueControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
