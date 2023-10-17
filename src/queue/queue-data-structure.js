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
    if (this.queueControl <= 0) {
      return true
    } else {
      return false
    }
  }

  enqueue(item) {

    if (!this.canEnqueue()) {
      throw new Error('QUEUE_OVERFLOW')
    } else {
      this.queueControl.push(item)
    }
    return this.queueControl
  }






  dequeue() {
    if (this.isEmpty()) {
      throw new Error('QUEUE_UNDERFLOW')
    } else {
      this.queueControl.pop()

    }
    return this.queueControl.pop()
  }

  z
  display() {
    return this.queueControl


  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
