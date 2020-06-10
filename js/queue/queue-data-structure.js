class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    // ... your code goes here

  }

  canEnqueue() {
    // ... your code goes here
    return this.queueControl.length < this.MAX_SIZE
  }

  isEmpty() {
    // ... your code goes here
    if (this.stackControl.length === 0) {
      return true
    } else {
      return false
    }

  }

  enqueue(arg) {
    // ... your code goes here
    if (this.canEnqueue()) {
      this.queueControl.unshift(arg)
      return this.queueControl
    } else {
      return 'Queue Overflow'
    }
  }

  dequeue() {
    // ... your code goes here
    if (!this.isEmpty()) {

      console.log(this.stackControl)
      this.queueControl.shift(arg)
      return this.queueControl[0]
    } else {
      return 'Queue Underflow'
    }
  }
}