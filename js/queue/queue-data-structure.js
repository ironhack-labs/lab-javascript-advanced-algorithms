class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    return 
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
    if (!this.canEnqueue()) {
      return "Queue Overflow" 
    } else {
      this.queueControl.unshift(item)
      return this.queueControl
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue Underflow"
    }
    return this.queueControl.pop()
  }
}
