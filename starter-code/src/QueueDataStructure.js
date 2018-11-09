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
    } else if ((this.queueControl.length = this.MAX_SIZE)) {
      return false;
    }
  }
  enqueue(number) {
    if (this.canEnqueue() == true) {
      this.queueControl.unshift(number);
      return this.queueControl;
    } else if (this.canEnqueue() === false) {
      return "Queue Overflow";
    }
  }
  dequeue() {
    if (this.queueControl.length > 0) {
      return this.queueControl.pop();
    } else if (this.isEmpty() === true) {
      return "Queue Underflow";
    }
  }
}
