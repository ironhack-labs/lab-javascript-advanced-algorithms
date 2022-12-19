class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here
    if (this.queueControl.length <= 9) {
      return true;
    } else if (this.queueControl.length <= 10) {
      return false;
    }
  }

  isEmpty() {
    // ... your code goes here
    if (this.queueControl.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  enqueue(item) {
    // ... your code goes here
    let enqueue = this.canEnqueue();
    if ((enqueue = true)) {
      this.queueControl.push(item);
      return this.queueControl;
    } else {
      throw new Error("QUEUE_OVERFLOW");
    }
  }

  dequeue(item) {
    // ... your code goes here
    let isEmpty = this.isEmpty();
    if ((isEmpty = false)) {
      let removedItem = this.queueControl.shift(item);
      return removedItem;
    } else {
      throw new Error("QUEUE_UNDERFLOW");
    }
  }

  display() {
    // ... your code goes here
    return this.queueControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== "undefined") module.exports = Queue;
