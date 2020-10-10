class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    return this.queueControl;
  }

  canEnqueue() {
    return this.queueControl.length<this.MAX_SIZE;
  }

  isEmpty() {
    return this.queueControl.length === 0
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(item)
    return this.queueControl
    } else {return 'Queue Overflow'}
    // ... your code goes here
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.queueControl.pop()
    } else {return 'Queue Underflow'}
    // ... your code goes here
  }
}
