class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    // ... your code goes here
    return this.queueControl
  }

  canEnqueue() {
    // ... your code goes here
    if (this.queueControl.length < this.MAX_SIZE) {
      return true
    } else {
      return false
    }
  }

  isEmpty() {
    // ... your code goes here
    if (this.queueControl.length === 0) {
      return true
    } else {
      return false
    }
  }

  enqueue(item) {
    // ... your code goes here
    if (this.queueControl.length === this.MAX_SIZE) {

      return 'Queue Overflow'

    } else {
      this.queueControl.unshift(item)
    }
    return this.display()
  }
  

  dequeue() {
    // ... your code goes here
    if (this.isEmpty() === true) {
      return 'Queue Underflow'
    } else {
      return this.queueControl.pop()
    }
  }
  
}
