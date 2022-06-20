class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }  }

  isEmpty() {
    if (this.queueControl.length !== 0) {
      return false;
    } else {
      return true;
    }  }

  enqueue(item) {
    if (this.canEnqueue() === false) {
      throw new Error('QUEUE_OVERFLOW');
    } else {
      this.queueControl.push(item);
    }
    return this.queueControl;  
  }

  dequeue() {
    if (this.isEmpty() === true) {
      throw new Error('QUEUE_UNDERFLOW');
    } else {
      return this.queueControl.shift();
    }
  }  

  display() {
    return this.queueControl;  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
