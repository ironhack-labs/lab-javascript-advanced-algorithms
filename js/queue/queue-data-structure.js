class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    // ... your code goes here
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
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

    if (this.queueControl.length === 0) {
      return 'Queue Underflow'
    } else {
      return this.queueControl[this.queueControl.length - 1]
    }
  }
  
}
