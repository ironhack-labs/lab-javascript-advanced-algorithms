class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    // ... your code goes here
  }

  canEnqueue() {
    // ... your code goes here
    return this.queueControl.length < this.MAX_SIZE;
  }

  isEmpty() {
    // ... your code goes here
    return !this.queueControl.length;
  }

  enqueue(item) {
    // ... your code goes here
    if (!this.canEnqueue())
      return "Queue Overflow";

    this.queueControl.push(item);
    this.queueControl.reverse();
    return this.queueControl;
  }

  dequeue() {
    // ... your code goes here
    if (this.isEmpty())
      return "Queue Underflow";

    return this.queueControl.pop();
  }
}