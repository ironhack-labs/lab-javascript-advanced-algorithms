class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length >= this.MAX_SIZE) {

      return false
    } else {
      return true
    }
  }

  isEmpty() {
    if (this.queueControl.length <= 0) {

      return true
    } else {
      return false
    }
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.push(item)
      return this.queueControl
    }
    throw new Error('QUEUE_OVERFLOW')
  }

  dequeue() {
    if (this.queueControl.length === 0) {
      throw new Error('QUEUE_UNDERFLOW')
    }
    let elem = this.queueControl.shift()
    return elem
  }

  display() {
    return this.queueControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
