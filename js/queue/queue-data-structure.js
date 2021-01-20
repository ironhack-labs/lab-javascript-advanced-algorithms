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
    if (this.queueControl.length === this.MAX_SIZE) {
      return false
    } else {
      return true
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
    const toEnqueue = this.canEnqueue(item)
    if (toEnqueue === false) {
      return 'Queue Overflow'
    } else {
      this.queueControl.unshift(item)
      return this.queueControl
    }
  }

  dequeue() {
    // ... your code goes here
    const lastItem = this.queueControl[this.queueControl.length -1]
    if (this.queueControl.length === 0) {
      return 'Queue Underflow'
    } else {
      this.queueControl.pop()
      return lastItem
    }
  }
}
