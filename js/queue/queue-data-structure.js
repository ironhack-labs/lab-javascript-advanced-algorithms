class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    return this.queueControl;
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }

  isEmpty() {
    if (this.queueControl.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  enqueue(item) {
     if (this.canEnqueue()) {
      this.queueControl.push(item);
      return this.queueControl.reverse();
    } else {
      return 'Queue Overflow';
    }
  }

  dequeue() {
     if (this.queueControl.length === 0) {
      return "Queue Underflow";        
    } else {
      return this.queueControl.pop()      
    }
  }
}
