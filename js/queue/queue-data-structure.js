class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
    this.isEmpty
  }

  display() {
    // ... your code goes here
    return this.queueControl
  }

  canEnqueue() {
    // ... your code goes here
    if (this.queueControl < this.MAX_SIZE) {
      return true
    } else {
      return false
    }
  }

  isEmpty() {
    // ... your code goes here
    if (this.queueControl.length === 0) {
      return true
    } else {
      return false
    }
  }

  enqueue(item) {
    // ... your code goes here
    if (this.canEnqueue === true) {
       return this.queueControl.pop(item)
    } else {
      return 'Stack Overflow'
    }

  }

  dequeue() {
    // ... your code goes here
    if (this.isEmpty() === true) {
      return 'Queue Underflow'
    } else {
      let last = this.queueControl[this.queueControl.length - 1];
      this.queueControl.pop()
      return last
    }

  }
}
