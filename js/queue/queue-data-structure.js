class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here
    if (this.queueControl.length < this.MAX_SIZE) {
      return true
    }

    else if (this.queueControl.length == this.MAX_SIZE) {

      return false

      // ... your code goes here
    }
  }

  isEmpty() {
    // ... your code goes here
    if (this.queueControl.length == 0)
      return true

    else {

      return false
    }
  }

  enqueue(item) {
    // ... your code goes here
    if (this.canEnqueue() == false) {
      throw new Error('QUEUE_OVERFLOW')
    }
    else {
      this.queueControl.push(item)

      return [item]
    }

  }



  dequeue() {
    // ... your code goes here
    if (this.queueControl.length == 0)
      throw new Error('QUEUE_UNDERFLOW')
    return this.queueControl.shift()


  }

  display() {
    // ... your code goes here
    return this.queueControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
