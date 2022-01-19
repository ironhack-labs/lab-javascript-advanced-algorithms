class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.MAX_SIZE > this.queueControl.length) {
      return true;
    } else {
      return false;
    }
  }

  isEmpty() {
    if (this.queueControl.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.push(item);
      return this.queueControl;
    } else {
      throw new Error('QUEUE_OVERFLOW');
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('QUEUE_UNDERFLOW');
    } else {
      const poped = this.queueControl.shift();
      return poped;
    }
  }

  display() {
    return this.queueControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
