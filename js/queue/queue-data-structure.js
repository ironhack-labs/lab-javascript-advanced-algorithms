class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    // ... your code goes here
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
    // ... your code goes here
  }

  isEmpty() {
    if (this.queueControl.length === 0) {
      return true;
    } else {
      return false;
    }
    // ... your code goes here
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(item);
      return this.queueControl;
    } else {
      return ("Queue Overflow");
    }
    // ... your code goes here
  }

  dequeue() {
    if (this.isEmpty()) {
      return ("Queue Underflow");
    } else {
      return this.queueControl.shift()
    }
    // ... your code goes here
  }
}
