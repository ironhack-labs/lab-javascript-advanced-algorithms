class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    return this.queueControl.length < this.MAX_SIZE
  }

  isEmpty() {
    return !this.queueControl.length
  }

  enqueue(item) {
    if (this.canEnqueue() === true) {
      this.queueControl.push(item)
    } else {

      throw new Error('QUEUE_OVERFLOW')
    }
    return this.queueControl
  }

  dequeue() {
    let item

    if (!this.isEmpty()) {
      item = this.queueControl.shift()
    } else {
      throw new Error('QUEUE_UNDERFLOW')
    }
    return item
  }

  display() {
    return this.queueControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
