class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 8;
  }
  isEmpty() {
    if (this.queueControl.length == 0) {
      return true;
    }
    return false;
  }
  canEnqueue() {
    if (this.MAX_SIZE != this.queueControl.length) {
      return true;
    } else {
      return false;
    }
  }
  enqueue(queue) {
    if (this.canEnqueue()) {
      this.queueControl.push();
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
