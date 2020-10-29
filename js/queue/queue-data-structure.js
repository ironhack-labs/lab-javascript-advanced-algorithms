class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {


    
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) { return true }
    return false

  }

  isEmpty() {

    if (this.queueControl.length === 0) { return true }
    return false

  }

  enqueue(item) {

    if (this.canEnqueue()) { this.queueControl.unshift(item); return this.queueControl }
    return 'Queue Overflow'

  }

  dequeue() {

    if (this.isEmpty()) { return 'Queue Underflow' }
    return this.queueControl.pop()

  }
}
