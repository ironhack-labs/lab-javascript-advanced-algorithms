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
    this.queueControl.unshift(item)
    if (this.queueControl.length - 1 === this.MAX_SIZE) {
      return 'Queue Overflow'
    } else {
      return this.queueControl
    }
  }

  dequeue() {
    if (this.queueControl.length > 0) {
      return this.queueControl.pop()
    } else {
      return 'Queue Underflow'
    }
  }
}
