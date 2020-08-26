class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    // ... your code goes here
  }

  canEnqueue() {
    if (this.queueControl.length == this.MAX_SIZE - 1) {
      return false
    }

    return true
  }

  isEmpty() {
    if (this.queueControl.length > 0) {
      return false
    }

    return true
  }

  enqueue(item) {


    if (this.queueControl.length == this.MAX_SIZE - 1) {
      return 'Queue Overflow'
    }

    this.queueControl.push(item)
    this.queueControl.reverse()
    return this.queueControl



  }

  dequeue() {

    if (this.queueControl.length == 0) {
      return 'Queue Underflow'
    }

    return this.queueControl[this.queueControl.length - 1]
  }
}
