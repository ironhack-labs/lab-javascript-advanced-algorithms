class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }
  isEmpty() {
    if (this.queueControl.length === 0) {
      return true;
    }
    return false;
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    }
    return false;
  }
  enqueue(elm) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(elm);
      return this.queueControl;
    } else {
      return "Queue Overflow";
    }
  }
  dequeue(elm) {
    if (this.queueControl.length == 0) {
      return "Queue Underflow";
    } else {
      let elm = this.queueControl[this.queueControl.length - 1];
      this.queueControl.pop(elm);
      return elm;
    }
  }
}
