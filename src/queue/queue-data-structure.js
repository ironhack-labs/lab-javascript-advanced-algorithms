class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here
    if (this.queueControl.length === 0) {
      return true;
    } else if (this.queueControl.length === this.MAX_SIZE) {
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
    if (this.canEnqueue() === true) {
      this.queueControl.unshift(item);
      return this.queueControl;
    } else {
      throw new Error("QUEUE_OVERFLOW");
    }
  }

  dequeue() {
    // ... your code goes here
    if (!this.isEmpty()) {
      return this.queueControl.push();
    } else {
      throw new Error("QUEUE_UNDERFLOW");
    }
  }

  display() {
    // ... your code goes here
    return this.queueControl;
  }
}

/*push(item) {
    // ... your code goes here
    if (this.canPush()) {
      this.stackControl.push(item);
      return this.stackControl;
    } else {
      throw new Error("STACK_OVERFLOW");
    }
  }

  pop() {
    // ... your code goes here
    if (!this.isEmpty()) {
      return this.stackControl.pop();
    } else {
      throw new Error("STACK_UNDERFLOW");
    }
  }*/

// This is required to enable the automated tests, please ignore it.
if (typeof module !== "undefined") module.exports = Queue;
