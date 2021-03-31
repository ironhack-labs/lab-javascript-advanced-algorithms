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
    } else {
      return true
    }
  }

  isEmpty() {
    if (this.queueControl.length <= 0) {
      return true
    } else {
      return false
    }
  }

  enqueue(item) {
    if (this.canEnqueue() === true) {
      this.queueControl.push(item)
      return this.queueControl.reverse()
    } else if (this.canEnqueue() === false) {
      return 'Queue Overflow'
    }
  }

  dequeue() {
    if (this.queueControl.length === 0) {
      return 'Queue Underflow'
    } return this.queueControl[this.queueControl.length - 1]
  }
}
