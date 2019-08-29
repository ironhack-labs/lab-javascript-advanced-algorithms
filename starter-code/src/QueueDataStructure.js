class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 8;
  }

  isEmpty() {
    return this.queueControl.length === 0 ? true : false;
  }

  enqueue(element) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(element);
      return this.queueControl;
    }

    return "Queue Overflow";
  }

  canEnqueue() {
    return this.queueControl.length < this.MAX_SIZE ? true : false;
  }

  dequeue() {
    return !this.isEmpty() ? this.queueControl.pop() : "Queue Underflow";
  }
}
