// FIFO (First-In-First-Out) structure

class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    // ... your code goes here
  }

  canEnqueue() {

    if (this.queueControl.length === this.MAX_SIZE) {
      return false
    }
    return true

  }

  isEmpty() {

    if (this.queueControl.length !== 0) {
      return false
    } else {
      return true
    }
  }

  enqueue(item) {

    if (this.queueControl.length === this.MAX_SIZE) {
      return 'Queue Overflow'
    }
    this.queueControl.unshift(item)

    if (this.queueControl.length !== 0) {
      return this.queueControl
    }

  }

  dequeue() {
    if (this.queueControl.length === 0) {
      return 'Queue Underflow'
    }
    return this.queueControl[this.queueControl.length - 1]
  }
}
