class QueueDataStructure {
  constructor(size) {
    this.queueControl = [];
    this.MAX_SIZE = size;
  }

  display() {
    return this.queueControl;
  }

  canEnqueue() {
    if (this.queueControl.length == this.MAX_SIZE) return false;
    return true;
  }

  isEmpty() {
    if (this.queueControl.length > 0) return false;
    return true;
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(item);
      return this.queueControl;
    }
    return 'Queue Overflow';
  }

  dequeue() {
    if (this.queueControl.length === 0) return 'Queue Underflow';
    return this.queueControl.pop();
  }
}
