class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here

    if (this.queueControl.lenght < this.MAX_SIZE) {
      return true
    } else {
      if (this.queueControl.length < 1) {
        return true
      }
      return false
    }
  }

  isEmpty() {
    // ... your code goes here

    if (this.queueControl.length < 1) {
      return true
    } else {
      return false
    }
  }

  enqueue(item) {
    // ... your code goes here
    if (this.queueControl.length === this.MAX_SIZE) {
      throw new Error('QUEUE_OVERFLOW');
    }
    if (this.canEnqueue() === true) {
      this.queueControl.unshift(item)
      return this.queueControl

    } else {
      //throw new Error('QUEUE_OVERFLOW');
    }


  }

  dequeue(item) {
    // ... your code goes here

    if (this.isEmpty() === false) {
      // this.queueControl.shift(item)
      return this.queueControl.shift(item)

    } else {
      throw new Error('QUEUE_UNDERFLOW');

    }
  }

  display() {
    // ... your code goes here

    return this.queueControl

  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
