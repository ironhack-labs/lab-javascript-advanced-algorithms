class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.MAX_SIZE >= 10) {
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
    } else {
      throw new Error('QUEUE_OVERFLOW')
    }
    return this.queueControl
  }


  dequeue() {
    if (this.isEmpty()) {
      throw new Error('QUEUE_UNDERFLOW')
    } else {
      let deleted = this.queueControl.shift()
      return deleted
    }
  }


  display() {
    return this.queueControl

  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
