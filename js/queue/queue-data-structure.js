class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length === this.MAX_SIZE) {
      return false;
    } else {
      return true;
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
    // if (this.isEmpty() === "false"){
    //   const itemPoped = this.queueControl.pop();
    //   return itemPoped;
    // } else {
    //   throw new Error('QUEUE_UNDERFLOW');
    // }

    if (this.isEmpty()){
      throw new Error('QUEUE_UNDERFLOW');
    } else {
      const itemPoped = this.queueControl.shift();
      return itemPoped;
    }
  }

  display() {
    return this.queueControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
