class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    return this.queueControl.length < this.MAX_SIZE
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
      throw new Error('QUEUE_OVERFLOW')
    }
  }


  dequeue() {
    if (this.queueControl.length === 0) {
      throw new Error('QUEUE_UNDERFLOW')
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
