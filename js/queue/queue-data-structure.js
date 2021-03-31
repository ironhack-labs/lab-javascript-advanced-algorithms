class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {

  }

  canEnqueue() {
    if (this.queueControl.length === this.MAX_SIZE) {
      return false
    }
    return true
  }

  isEmpty() {
    if (this.queueControl.length === 0) {
    return true
    }
    return false
  }

  enqueue(item) {
    if (this.queueControl.length === this.MAX_SIZE) {
      return 'Queue Overflow'
    }
    this.queueControl.push(item)
    const reversedArray = this.queueControl.reverse()
    return reversedArray
  }

  dequeue() {
    if (this.queueControl.length === 0) {
      return 'Queue Underflow'
    }   
    this.queueControl.pop()
    return this.queueControl[this.queueControl.length-1]
  }
}
