class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 0;
  }

  isEmpty() {
    if (this.queueControl.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  canEnqueue() {
    if (
      this.queueControl.length < this.MAX_SIZE ||
      this.queueControl.length == 0
    ) {
      return true;
    } else {
      return false;
    }
  }
  enqueue(x) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(x);
      return this.queueControl;
    } else {
      return "Queue Overflow";
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue Underflow";
    } else {
      let firstElement = this.queueControl.pop();
      return firstElement;
    }
  }
}
