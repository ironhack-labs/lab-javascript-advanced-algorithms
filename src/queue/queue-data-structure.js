class Queue {
  constructor() {
    this.queueControl = [1, 2];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true
    }
    return false
  }

  isEmpty() {
    if (this.queueControl.length === 0) {
      return true
    }
    return false
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.push(item)
      return this.queueControl
    }
    else throw new Error('QUEUE_OVERFLOW')
  }

  dequeue() {
    if (!this.isEmpty()) {
      let deleted = this.queueControl[0]
      this.queueControl.unshift()
      return deleted
    }
    else throw new Error('QUEUE_UNDERFLOW')
  }

  display() {
    return this.queueControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
