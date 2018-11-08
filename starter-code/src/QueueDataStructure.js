class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  isEmpty() {
    if (this.queueControl.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }
  enqueue(el) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(el);
    } else {
      return "Queue Overflow";
    }
    return this.queueControl;
  }

  dequeue(el) {
    if (this.isEmpty() === false) {
      return this.queueControl.pop(el);
    } else {
      return "Queue Underflow";
    }
  }
}
