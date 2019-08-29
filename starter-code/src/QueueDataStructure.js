class QueueDataStructure {
  constructor() {
    this.MAX_SIZE = 8;
    this.minSize = 0;
    this.queueControl = [];
    this.counter = 0;
  }

  isEmpty() {
    if (this.counter <= 0) {
      return true;
    } else {
      return false;
    }
  }
  canEnqueue() {
    if (this.counter >= this.MAX_SIZE) {
      return false;
    } else {
      return true;
    }
  }
  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(item);
      this.counter++;
      return this.queueControl;
    } else {
      return "Queue Overflow";
    }
  }
  dequeue() {
    if (!this.isEmpty()) {
      var popped = this.queueControl.pop();
      this.counter--;
      return popped;
    }
    else {
      return 'Queue Underflow';
    }
  }

}
