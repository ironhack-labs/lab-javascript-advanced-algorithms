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
    return this.queueControl.length < this.MAX_SIZE;

  }

  isEmpty() {
    // ... your code goes here
    return this.queueControl.length == 0;
  }

  enqueue(item) {
    // ... your code goes here
    if (this.canEnqueue()) {
      this.queueControl.unshift(item);
      return this.queueControl;
    } else {
      return 'Queue Overflow';
    }
  }

  dequeue() {
    // ... your code goes here
      if (!this.isEmpty()) {
        return this.queueControl.pop()
      } else {
        return 'Queue Underflow'
      }
  }
}
