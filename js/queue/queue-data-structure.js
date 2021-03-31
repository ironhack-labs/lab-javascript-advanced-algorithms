class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    // ... your code goes here
  }

  canEnqueue() {
    if (this.queueControl.length >= 0 && this.queueControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }


  isEmpty() {
    if (this.queueControl.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(item);
      console.log(this.queueControl)
      return this.queueControl
    } else if (!this.canEnqueue()) {
      return 'Queue Overflow'
    }
  }

  dequeue() {
    if (this.queueControl.length !== 0) {
      return this.queueControl.pop();
    } else if (this.queueControl.length === 0) {
      return 'Queue Underflow'
    }
  }
}
