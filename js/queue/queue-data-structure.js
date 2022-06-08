class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true
    } else if (this.queueControl.length >= this.MAX_SIZE) {
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
    if (this.canEnqueue() === true) {
      this.queueControl.push(item)
      return [item]
    } else {
      throw new Error('QUEUE_OVERFLOW')
    }
  }

  dequeue() {
    if (this.isEmpty() === false) {
      const shift = this.queueControl.shift()
      return shift
    } else {
      throw new Error('QUEUE_UNDERFLOW')
    }
  }

  display() {
    return this.queueControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
