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
    return this.queueControl.length < this.MAX_SIZE ? true : false
  }

  isEmpty() {
    // ... your code goes here
    return !this.queueControl.length ? true : false
  }

  enqueue(item) {
    // ... your code goes here
    if (this.canEnqueue()) {
      this.queueControl.unshift(item)
      return this.queueControl
    }
    return 'Queue Overflow'
  }

  dequeue() {
    // ... your code goes here
    return this.isEmpty() ? 'Queue Underflow' : this.queueControl.pop()
  }
}
