class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 7;
  }

  isEmpty() {
    return this.queueControl.length === 0 ? true : false;
  }

  canEnqueue() {
    return this.queueControl.length < this.MAX_SIZE ? true : false;
  }

  enqueue(element) {
    if (!this.canEnqueue()) return "Queue Overflow"
    this.queueControl.unshift(element);
    return this.queueControl;
  }

  dequeue() {
    if (this.queueControl.length === 0) return "Queue Underflow"
    return this.queueControl.pop()
  }
}
