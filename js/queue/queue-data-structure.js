class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    return this.queueControl.length

  }

  canEnqueue() {
    // Check the length of the stack to not do an overflow
    if (this.display() < this.MAX_SIZE) {
      return true
    } else if (this.display() >= this.MAX_SIZE) {
      return false
    }
  }

  isEmpty() {
    // Check the length of the stack to not do an underflow
    if (this.display() === 0) {
      return true
    } else {
      return false
    }
  }

  enqueue(item) {
    // Add a new item only when is possible
    
    this.queueControl.unshift(item)
    if (this.canEnqueue() == false) {
      // The return is changed to compare in the DOM
      return "overflow"
    }
    return this.queueControl
  }

  dequeue() {
    // Remove a new item only when is possible
    if (this.isEmpty()) {
      // The return is changed to compare in the DOM
      return "underflow"
    }
    let lastElement = this.queueControl.pop()
    return lastElement

  
  }
}
