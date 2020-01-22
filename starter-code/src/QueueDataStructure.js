class QueueDataStructure {
    constructor() {
      this.queueControl = [];
      this.MAX_SIZE = 8;
    }
  
    isEmpty() {
      return !Boolean(this.queueControl.length);
    }
  
    canEnqueue() {
      return this.queueControl.length < this.MAX_SIZE;
    }
  
    enqueue(stackElem) {
      return this.canEnqueue() 
        ? (this.queueControl.unshift(stackElem), this.queueControl)
        : "Queue Overflow"
    }
  
    dequeue() {
      return !this.isEmpty() ? this.queueControl.pop() : "Queue Underflow";
    }
  }