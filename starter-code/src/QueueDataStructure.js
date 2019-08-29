class QueueDataStructure {
  constructor() {
    this.queueControl = []
    this.MAX_SIZE = 8
  }

  isEmpty (){
    if (this.queueControl.length === 0) {
      return true;
    }
    else {
      return false;
    }
  }

  canEnqueue () {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    }
    else {
      return false;
    }
  }

  enqueue(arg) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(arg);
      return this.queueControl;
    }
    else {
      return "Queue Overflow"
    }
  }

  dequeue() {
    if (this.isEmpty()){
      return "Queue Underflow"
    }
    else {
      return this.queueControl.pop();
    }
  }
} 

