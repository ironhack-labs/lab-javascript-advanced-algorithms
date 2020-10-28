class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {

    
  }

  canEnqueue() {
    return (this.queueControl.length < this.MAX_SIZE) 
  }

  isEmpty() {
    return (this.queueControl.length === 0)
  }

  enqueue(item) {


    this.queueControl.unshift(item)

    if (this.queueControl.length - 1 === this.MAX_SIZE) {
      return 'Queue Overflow'
    }
    else {
      return (this.queueControl)
    }

  }

  dequeue() {
    if (this.queueControl.length === 0) {
      return 'Queue Underflow'
    }
    else {
      return (this.queueControl.pop())
    }
  }
}
