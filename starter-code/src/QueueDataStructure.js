class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 5;
  }
    isEmpty() {
       return this.queueControl == 0 ? true : false;
        
  }

    canEnqueue() {
      return this.queueControl.length < this.MAX_SIZE ? true : false


  }

    enqueue(ele) {
        if (this.MAX_SIZE == this.queueControl.length) {
    return "Queue Overflow";
}
        else {
        this.queueControl.unshift(ele)
        return this.queueControl
      }
  }
    dequeue() {
if (this.queueControl == 0) {
  return "Queue Underflow";
} else {
  return this.queueControl.pop();
}
      
  }
}
