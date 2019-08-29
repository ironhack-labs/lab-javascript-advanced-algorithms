class QueueDataStructure {

  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  } 
  isEmpty() {
    return (this.queueControl.length == 0) ? true : false;
  }

  canEnqueue() {
    return (this.queueControl.length < this.MAX_SIZE) ? true : false;
  }

  enqueue(element) {
    if(this.canEnqueue()) {
      this.queueControl.unshift(element);
      return this.queueControl;
    } else {
      return "Queue Overflow";
    }
  }

  dequeue() {
    if(this.isEmpty() == false) {
      return this.queueControl.pop();
    } else {
      return 'Queue Underflow';
    }
  }
}
