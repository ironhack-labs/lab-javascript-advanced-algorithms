class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) return true;
    else return false;
  }

  isEmpty() {
    if (this.queueControl.length <= this.MAX_SIZE - this.MAX_SIZE) return true;
    else return false;
  }

  enqueue(item) {
    if (this.canEnqueue(this.queueControl)) {
      this.queueControl.push(item);
      return this.queueControl;
    } else throw new Error("QUEUE_OVERFLOW");
  }

  dequeue() {
    if (this.queueControl < 1) throw new Error("QUEUE_UNDERFLOW");
    else return this.queueControl.shift(this.queueControl);
  }

  display() {
    return this.queueControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== "undefined") module.exports = Queue;
