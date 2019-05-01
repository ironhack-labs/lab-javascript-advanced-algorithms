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

  enqueue(arg) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(arg);
      return this.queueControl;
    } else {
      return "Queue Overflow";
    }
  }

  dequeue(arg) {
    if (!this.isEmpty()) {
      console.log(this.stackControl);
      this.queueControl.shift(arg);
      return this.queueControl[0];
    } else {
      return "Queue Underflow";
    }
  }
}
