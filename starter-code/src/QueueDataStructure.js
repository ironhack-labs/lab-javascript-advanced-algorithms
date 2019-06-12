class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 8;
  }

  isEmpty() {
    if (this.queueControl.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  canEnqueue() {
    if (this.queueControl.length === this.MAX_SIZE) {
      return false;
    } else {
      return true;
    }
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(item);
      return this.queueControl;
    } else {
      return "Queue Overflow";
    }
  }

  dequeue(item) {
    if (!this.isEmpty()) {
      this.queueControl.shift(item);
      return this.queueControl.pop();
    } else {
      return "Queue Underflow";
    }
  }
}
