class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    if (this.queueControl.length === 0) {
      return "Queue Underflow";
    } else if (this.queueControl.length === this.MAX_SIZE) {
      return "Queue Overflow";
    } else {
      return this.queueControl;
    }
  }

  canEnqueue() {
    return this.queueControl.length < this.MAX_SIZE ? true : false;
  }

  isEmpty() {
    return this.queueControl.length <= 0 ? true : false;
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(item);
      return [item]
    }
    return "Queue Overflow";
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue Underflow";
    } else {
      this.queueControl.shift();
      return this.queueControl[0];;
    }
  }
}
