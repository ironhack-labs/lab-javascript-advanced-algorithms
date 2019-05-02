class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 8;
  }

  isEmpty() {
    return this.queueControl.length === 0;
  }

  canEnqueue() {
    return this.queueControl.length < this.MAX_SIZE;
  }

  enqueue(e) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(e);
      return this.queueControl;
    } else {
      return `Queue Overflow`;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue Underflow";
    }
    this.queueControl.shift();
    return this.queueControl[0];
  }
}
