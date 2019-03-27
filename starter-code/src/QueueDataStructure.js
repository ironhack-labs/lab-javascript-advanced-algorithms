class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 8;
  }
  isEmpty() {
    if (this.queueControl.length === 0) return true;
    return false;
  }
  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) return true;
    return false;
  }
  enqueue(element) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(element);
      return this.queueControl;
    } else return "Queue Overflow";
  }
  dequeue() {
    if (this.queueControl.length === 0) return "Queue Underflow";
    return this.queueControl.pop();
  }
}
