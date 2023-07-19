class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    return (this.queueControl.length < this.MAX_SIZE)
  }


  isEmpty() {
    return (this.queueControl.length === 0)
  }


  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.push(item)
    } else {
      // throw new Error('QUEUE_OVERFLOW');
      return 'Queue Overflow'
    }
    return this.queueControl
  }


  dequeue() {
    if (!this.isEmpty()) {
      const poppedElement = this.queueControl.shift()
      return poppedElement
    } else {
      // throw new Error('QUEUE_UNDERFLOW');
      return 'Queue Underflow'
    }

  }


  display() {
    return this.queueControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
