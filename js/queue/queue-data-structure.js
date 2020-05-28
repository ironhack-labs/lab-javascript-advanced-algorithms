class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 2;
  }

  display() {
  }

  canEnqueue() {
    return this.queueControl.length < this.MAX_SIZE ? true : false;
  }

  isEmpty() {
    return this.queueControl.length === 0 ? true : false;
  }

  enqueue(item) {
    if (this.queueControl.length === this.MAX_SIZE) {
      return 'Queue Overflow'
    } else {
      this.queueControl.unshift(item);
      return this.queueControl;
    }
  }

  dequeue() {
    if (this.queueControl.length === 0) {
      return 'Queue Underflow';
    } else {
      const removedItem = this.queueControl.pop();
      return removedItem;
    }
  }
}
