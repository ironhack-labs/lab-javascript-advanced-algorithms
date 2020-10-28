class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    return this.queueControl
    // ... your code goes here
  }

  canEnqueue() {

    if (this.queueControl.length = this.MAX_SIZE) {
      return false
    } else {
      return true
    }
    // ... your code goes here
  }

  isEmpty() {

    if (this.canEnqueue >= 0) {
      return false
    } else {
      return true
    }
    // ... your code goes here
  }

  enqueue(item) {

    if (this.canEnqueue()) {
      this.queueControl.shift(item)
      return this.queueControl
    } else {
      return 'Queue Overflow'
    }
    // ... your code goes here
  }

  dequeue() {
    if (this.dequeue()) {
      this.queueControl.length = 0
      return 'Queue Underflow'
    } else {
      return this.queueControl.pop()
    }
    // ... your code goes here
  }
}
