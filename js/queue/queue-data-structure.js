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

    if (!this.canEnqueue()) {

      return 'Queue Overflow'

    }

    this.queueControl.unshift(item)

    return this.queueControl

  }

  dequeue() {

    if (this.queueControl.length === 0) {

      return 'Queue Underflow'

    }

    return this.queueControl.pop(this.queueControl.length - 1)

  }

}
