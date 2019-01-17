class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 8;
  }

  // Check if current queue is empty
  isEmpty() {
    return this.queueControl.length === 0;
  }

  // Check if we can push elements into the queue
  canEnqueue() {
    return this.queueControl.length !== this.MAX_SIZE;
  }

  // push element into the queue
  enqueue(element) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(element);
      return this.queueControl;
    } else {
      return 'Queue Overflow';
    }
  }

  // take element from the stack
  dequeue() {
    if (this.isEmpty()) {
      return 'Queue Underflow';
    } else {
      return this.queueControl.pop();
    }
  }
}
