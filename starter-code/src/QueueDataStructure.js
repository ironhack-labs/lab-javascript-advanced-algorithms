class QueueDataStructure {
  constructor(queue=[]) {
    this.queueControl = queue;
    this.MAX_SIZE = 10;
  }
  isEmpty() {
    return(this.queueControl.length === 0);
  }
  canEnqueue() {
    return(this.queueControl.length < this.MAX_SIZE);
  }
  enqueue(val) {
    if(this.canEnqueue() === true) {
      this.queueControl.unshift(val);
      return this.queueControl;
    } else {
      return "Queue Overflow" ;
    }
  }
  dequeue() {
    if(this.isEmpty()) {
      return "Queue Underflow" ;
    } else {
      return this.queueControl.pop();
    }
  }
  push(val) {
    return this.enqueue(val);
  }
 }