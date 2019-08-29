class QueueDataStructure {
  constructor () {
    this.queueControl = [];
    this.MAX_SIZE = 8;
  }

  isEmpty() {
    if (this.queueControl.length === 0)
    {return true;} else {return false};
  };

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE)
    {return true} else {return false};
  };

  enqueue(int) {
    if (this.canEnqueue (int)) {
      this.queueControl.push(int);
      return this.queueControl;
     } else {return 'Stack Overflow'}
  };

  dequeue() {
    if (this.isEmpty() === true) {
      return 'Stack Underflow'
    } else {return this.queueControl.pop()};
  };
  
  
}
