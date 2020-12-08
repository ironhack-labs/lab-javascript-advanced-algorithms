class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    // ... your code goes here
    return this.queueControl
  }

  canEnqueue() {
    // ... your code goes here
    if (this.queueControl.length < this.MAX_SIZE) {
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
    if (this.canEnqueue()) {
      this.queueControl.unshift(item);
      return this.queueControl
    } else {
      return 'Queue Overflow'
    }
    
  }

  dequeue() {
    // ... your code goes here
    if (this.isEmpty()) {
      return 'Queue Underflow'
    } else {
      this.queueControl.shift();
      return this.queueControl[0]
    }
  }
}
