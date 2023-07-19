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
    } else {
      return false
    }
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.push(item)
      return this.queueControl
    } else {
      //throw new Error('QUEUE_OVERFLOW') JASMINE
      return 'Queue Overflow'
    }
  }

  dequeue() {
    if (this.queueControl.length > 0) {
      return this.queueControl.shift()

    } else {
      //throw new Error('QUEUE_UNDERFLOW') JASMINE
      return 'Queue Underflow'
    }
  }

  display() {
    return this.queueControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
