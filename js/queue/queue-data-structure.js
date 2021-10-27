class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
    this.item = [];
  }

  canEnqueue() {
    if(this.queueControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }

  isEmpty() {
    if(this.queueControl == 0) {
      return true;
    } else {
      return false;
    }
  }

  enqueue(item) {
    if(this.canEnqueue()) {
      this.queueControl.push(item);
      return this.queueControl;
    } else {
      throw new Error('QUEUE_OVERFLOW');
    }
  }

  dequeue(item) {
    const deleteItem = this.queueControl.shift(item);
    if(!this.isEmpty()) {
      return deleteItem;
    } else {
      throw new Error('QUEUE_UNDERFLOW');
    }
  }

  display() {
    return this.queueControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
