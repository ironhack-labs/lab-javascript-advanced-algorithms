class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    return this.queueControl
  }

  canEnqueue() {
    
    if(this.MAX_SIZE > this.queueControl){
      return true
    }else {
      return false
    }
  }

  isEmpty() {
    if(this.queueControl.length === 0){
      return true
    } else {
      return false
    }
  }  

  enqueue(item) {
    if(this.canEnqueue() === true){
      this.queueControl.push(item)
      return this.queueControl
    } else {
      return 'Queue Overflow'
    }
  }

  dequeue() {
    if(this.isEmpty() === true){
      return 'Queue Underflow'
      } else {
      return this.queueControl.pop()
  }
  }
}
