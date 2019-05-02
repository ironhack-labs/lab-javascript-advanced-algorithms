class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }
  isEmpty() {
    if (this.queueControl.length == 0) {
      return true;
    } else {
      return false;
    }
  }
  canEnqueue() {
    if (this.queueControl.length == this.MAX_SIZE) {
      return false;
    } else {
      return true;
    }
  }
  enqueue(queue) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(queue);
      return this.queueControl;
    } else {
      return "Queue Overflow";
    }
  }
  dequeue(queue) {
    if (this.isEmpty()) {
      return "Queue Underflow";
    } else {
      return this.queueControl.pop(queue);
    }
  }
}
