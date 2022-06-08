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
    if (this.queueControl.length === 0) {
      return true
    } return false
  }

  enqueue(item) {
    if (this.canEnqueue() === true) {
      this.queueControl.push(item)
      return this.queueControl
    } throw new Error('QUEUE_OVERFLOW');
  }

  dequeue() {
    if (this.isEmpty() === false) {
      let firstElement = this.queueControl[0]
      this.queueControl.shift()
      return firstElement
    } throw new Error('QUEUE_UNDERFLOW');
  }

  display() {
    return this.queueControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
