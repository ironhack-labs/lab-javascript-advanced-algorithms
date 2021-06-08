class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true
    } else return false
    // ... your code goes here
  }

  isEmpty() {
    if (this.queueControl.length == 0) {
      return true
    } else return false
    // ... your code goes here
  }

  enqueue(item) {
    if (this.queueControl.length < this.MAX_SIZE) {
      this.queueControl.push(item)
      return this.queueControl
    } else {
      throw new Error('QUEUE_OVERFLOW');
    };
  }
  dequeue(item) {

    if (this.queueControl.length == 0) {
      throw new Error("QUEUE_UNDERFLOW");
    } else {
      let x = this.queueControl.shift(item)
      return x
    }
    // ... your code goes here
  }

  display() {
    return this.queueControl
    // ... your code goes here
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
