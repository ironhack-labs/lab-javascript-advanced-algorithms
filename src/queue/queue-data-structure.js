class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    return this.MAX_SIZE <= this.queueControl.length ? false : true
  }

  isEmpty() {
    return this.queueControl.length ? false : true
  }

  enqueue(item) {
    if (this.canEnqueue() === true) {
      this.queueControl.push(item)
      return this.queueControl
    } else {
      throw new Error("QUEUE_OVERFLOW")
    }
  }

  dequeue() {
    if (this.isEmpty() === false) {
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
