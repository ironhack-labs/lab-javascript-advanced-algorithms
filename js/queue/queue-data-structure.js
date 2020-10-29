class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    if (this.queueControl.length === 0) {
      return true
     } else {
       return false
    }
  }

  canEnqueue() {
    if (this.MAX_SIZE > this.queueControl.length) {
      return true 
     } else {
       return false
    }
  }

  isEmpty() {
    if (this.queueControl.length === 0) {
      return true
    } else {
      return false
    }
   
  }

  enqueue(item) {
    if (this.queueControl.length === this.MAX_SIZE) {
      return 'Queue Overflow'
     } else {
       this.queueControl.unshift(item)
       return this.queueControl
     }
  }

  dequeue() {
    if (this.queue.length === 0) {
      return 'Queue Underflow'
      
    } else {
      return this.queueControl.pop()
    }
  

  }
}
