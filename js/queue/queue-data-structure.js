class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    } else if (this.queueControl.length === this.MAX_SIZE) {
      return false;
    }
  }

  isEmpty() {
    if (this.queueControl.length === 0) {
      return true;
    } else if (this.queueControl.length > 0) {
      return false;
    }
  }

  enqueue(item) { 
    if (this.canEnqueue() === true) {
      this.queueControl.push(item);
      return this.queueControl;
    } else if (this.canEnqueue() === false) {
      throw new Error ('QUEUE_OVERFLOW');
    }
  }

  dequeue() {
    if (this.isEmpty() === false) {
      let shiftino = this.queueControl.shift();
      return shiftino;
    } else if (this.isEmpty() === true) {
      throw new Error ('QUEUE_UNDERFLOW');
    }
  }

  display() {
    return this.queueControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
