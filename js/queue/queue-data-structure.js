class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    return this.queueControl;
  }

  canEnqueue() {
    return this.queueControl.length === this.MAX_SIZE ? false : true
  }

  isEmpty() {
    return this.queueControl.length > 0 ? false : true
  }

  enqueue(item) {
    if(this.canEnqueue()) {
      this.queueControl.unshift(item)
      return this.queueControl;
    }
      return 'Queue Overflow';
  }

  dequeue() {
    if(this.queueControl.length === 0) {
      return 'Queue Underflow';
    } else {
      return this.queueControl.pop();
    }
  }
}
