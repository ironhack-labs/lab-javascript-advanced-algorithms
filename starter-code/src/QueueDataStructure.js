class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 1000;
    this.OVERFLOW_MSG = 'Queue Overflow';
    this.UNDERFLOW_MSG = 'Queue Underflow';
  }

  isEmpty() {
    return this.queueControl.length === 0;
  }

  canEnqueue() {
      return this.queueControl.length < this.MAX_SIZE;
  }

  canDequeue() {
    return this.queueControl.length > 0;
  }

  enqueue(item) {
    if (!this.canEnqueue()) { return this.OVERFLOW_MSG; }
    this.queueControl.unshift(item);
    return this.queueControl;
  }

  dequeue() {
    if (!this.canDequeue()) { return this.UNDERFLOW_MSG }
    return this.queueControl.pop();
  }

}
