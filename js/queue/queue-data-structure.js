class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    // ... your code goes here
  }

  canEnqueue() {
    return this.queueControl.length < this.MAX_SIZE ? true : false;
  }

  isEmpty() {
    return this.queueControl.length === 0 ? true : false;
  }

  enqueue(item) {
    
    if (this.canEnqueue()) {
      this.queueControl.unshift(item);
      return this.queueControl;
    } else {
      return 'Queue Overflow';
    }

  }

  dequeue() {
   if (!this.isEmpty()) {
     return this.queueControl.pop();
   } else {
     return 'Queue Underflow';
   }
  }
}
