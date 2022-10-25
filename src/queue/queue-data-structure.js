class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here
    if(this.queueControl.length >= this.MAX_SIZE) {
      return false;
    }
    return true;
  }

  isEmpty() {
    // ... your code goes here
    return this.queueControl.length === 0;
  }

  enqueue(item) {
    // ... your code goes here
    if(this.canEnqueue()) {
      this.queueControl.push(item);
    } else if (!this.canEnqueue()) {
      throw new Error("QUEUE_OVERFLOW");
    }
    return this.queueControl;
  }

  dequeue() {
    // ... your code goes here
    if(this.isEmpty()) {
      throw new Error("QUEUE_UNDERFLOW");
    }
    let toBeRemoved = this.queueControl[0];
    this.queueControl.shift();
    return toBeRemoved;
  }

  display() {
    // ... your code goes here
    this.queueControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
