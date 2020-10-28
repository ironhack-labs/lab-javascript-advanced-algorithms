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
      this.queueControl.unshift(item)
      return this.queueControl
    } else {
      return 'Queue Overflow'
    }
  }

  dequeue() {
    if (this.isEmpty() === false) {
      return this.queueControl.pop()
    } else {
      return 'Queue Underflow'
    }
  }
}
