class QueueDataStructure {
  constructor() {
    this.queueControl = []
    this.MAX_SIZE = 8;
  }
  isEmpty() {
    if(this.queueControl.length < 1) {
      return true
    } else {
      return false
    }
  }
  canEnqueue() {
    if(this.queueControl.length < this.MAX_SIZE) {
      return true
    } else {
      return false
    }
  }
  enqueue(args) {
    if(this.canEnqueue()) {
      this.queueControl.unshift(args)
      return this.queueControl
    } else {
      return 'Queue Overflow'
    }
  }
  dequeue() {
    if(!this.isEmpty()) {
      return this.queueControl.pop();
    } else {
      return 'Queue Underflow'
    }
  }
}
