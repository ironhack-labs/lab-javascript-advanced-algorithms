class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 5;
  }

  isEmpty() {
    if (this.queueControl.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  canEnqueue() {
    return this.queueControl.length < this.MAX_SIZE;
  }
  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(parseInt(item));
      return this.queueControl;
    } else {
      return "Queue Overflow";
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return "Queue Underflow";
    } else {
      return this.queueControl.pop();
    }
  }
}
