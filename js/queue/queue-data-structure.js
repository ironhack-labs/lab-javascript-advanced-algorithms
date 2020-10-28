class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    // ... your code goes here
  }

  canEnqueue() {
    let canEnqueue = true
    if (this.queueControl.length === this.MAX_SIZE) {
      canEnqueue = false
    }
    return canEnqueue
  }

  isEmpty() {
    return(this.queueControl.length === 0)
  }

  enqueue(item) {
    if (!this.canEnqueue()) {
      return 'Queue Overflow'
    } else {
      this.queueControl.unshift(item)
      return this.queueControl
    }
  }

  dequeue() {
    if (this.queueControl.length === 0) {
      return 'Queue Underflow'
    } else {
      return this.queueControl.pop()
    }
  }
}
