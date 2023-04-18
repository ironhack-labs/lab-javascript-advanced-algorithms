class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
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
    } else if (this.queueControl.length > 0) {
      return false
    } else {
      return false
    }
  }

  enqueue(item) {
    if (this.queueControl.length < this.MAX_SIZE) {
      this.queueControl.push(item)
      return this.queueControl
    } if (this.queueControl > this.MAX_SIZE) {
      throw new Error('QUEUE_OVERFLOW');

    }
  }


  dequeue() {
    if (this.queueControl.length === 0) {
      throw new Error('QUEUE_UNDERFLOW')
    }
    else if (this.queueControl.length < this.MAX_SIZE) {
      return this.queueControl.shift()
    }

  }

  display() {
    return this.queueControl
  }
}
// This is required to enable the automated tests, please ignore it.
//if (typeof module !== 'undefined') module.exports = Queue;
