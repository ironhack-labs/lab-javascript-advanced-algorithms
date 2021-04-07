class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    return this.queueControl
  }

  canEnqueue() {
    return this.queueControl === this.MAX_SIZE ? false : true
  }

  isEmpty() {
    return this.queueControl.length === 0 ? true : false
  }

  enqueue(item) {
    if (this.queueControl.length === this.MAX_SIZE){
      return 'Queue Overflow'
    }else{
      this.queueControl.unshift(item)
      return this.queueControl
    } 
  }

  dequeue() {
    if (this.queueControl.length === 0){
      return 'Queue Underflow'
    }else{
      return this.queueControl.pop()
    }
  }
}
