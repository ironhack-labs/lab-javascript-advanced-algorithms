class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    return this.queueControl.length < this.MAX_SIZE ? true : false;
  }

  isEmpty() {
    return this.queueControl.length === 0 ? true : false;
  }

  enqueue(item) {
    if (!this.canEnqueue()) {
      return 'Queue Overflow';
      throw new Error('QUEUE_OVERFLOW');
    }
    this.queueControl.push(item);
    return this.queueControl;
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.queueControl.shift();
    } else {
      return 'Queue Underflow';
      throw new Error('QUEUE_UNDERFLOW');
    }
  }

  display() {
    return this.queueControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
