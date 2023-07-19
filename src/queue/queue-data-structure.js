class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl < this.MAX_SIZE) {
      return true
    }
    else
      return false
  }

  isEmpty() {
    if (this.queueControl == 0) {
      return true
    }
    else
      return false
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.push(item)
      return this.queueControl
    }
    else {
      throw new Error('QUEUE_OVERFLOW')
    }
  }

  dequeue() {
    if (this.isEmpty(this.queueControl) === false) {
      return this.queueControl.pop()
    }
    else
      throw new Error('QUEUE_UNDERFLOW')
  }

  display() {
    return this.queueControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
