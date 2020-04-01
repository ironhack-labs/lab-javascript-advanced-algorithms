class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    // ... your code goes here
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) return true
    else return false
  }

  isEmpty() {
    if (this.queueControl.length === 0) return true
    return false
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(item)
      return this.queueControl
    }
    else return `Queue Overflow`
  }

  dequeue() {
    if (!this.isEmpty()) return this.queueControl.pop()
    else return `Queue Underflow`
  }
}

