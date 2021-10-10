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
      return true
    } else {
      return false;
    }
  }

  enqueue(item) {
    if (this.queueControl.canEnqueue !== true) {
      this.queueControl.push(item);
      return this.queueControl;
    } else {
      throw ('QUEUE_OVERFLOW');
    }

  }
  //If the value returned by isEmpty is false, you should remove the first item of the queueControl array.
  dequeue() {
    if (this.queueControl.isEmpty === true) {
      const shifted = this.queueControl.shift();
      return shifted;
    } else {
      throw ('QUEUE_UNDERFLOW');
    }
  }

  display() {
    return this.queueControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
