// queue with class instead of function constructor

export class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = Number(8);
  }

  isEmpty() {
    if (this.queueControl.length == 0) {
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

  enqueue(element) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(element);
      return this.queueControl;
    } else {
      return "Queue Overflow";
    }
  }

  dequeue() {
    if (this.queueControl.length <= 0) {
      return "Queue Underflow";
    } else {
      return this.queueControl.pop();
    }
  }
}
