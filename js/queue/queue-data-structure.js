class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    // ... your code goes here
  }

  canEnqueue() {
    // ... your code goes here
    if (this.MAX_SIZE == this.queueControl.length) {
      return false
    } else {
      return true
    }
  }

  isEmpty() {
    if (!this.queueControl.length) {
      return true
    } else {
      return false
    }
    // ... your code goes here
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(item)
      return this.queueControl
    } else {
      return 'Queue Overflow'
    }
    // ... your code goes here
  }

  dequeue() {
    // ... your code goes here
    if (this.isEmpty()) {
      return 'Queue Underflow'
    } else {
      return this.queueControl.pop()
    }
  }
}