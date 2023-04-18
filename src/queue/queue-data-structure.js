class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl >= this.MAX_SIZE) {
      return false
    }
    else if (this.queueControl.length < this.MAX_SIZE) {
      return true
    }
  }


  isEmpty() {
    if (this.queueControl.length === 0) {
      return true
    }
    else if (this.queueControl.length < this.MAX_SIZE) {
      return false
    }
  }


  enqueue(item) {
    if (this.queueControl.length < this.MAX_SIZE) {
      this.queueControl.push(item);
      return this.queueControl
    }

    if (this.queueControl >= this.MAX_SIZE) {
      throw new Error('QUEUE_OVERFLOW');
    }
  }

  dequeue() {
    if (this.queueControl.length > 0) {
      return this.queueControl.shift();
    }

    else if (this.queueControl.length === 0) {
      throw new Error('QUEUE_UNDERFLOW');
    }
  }

  display() {
    return this.queueControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
