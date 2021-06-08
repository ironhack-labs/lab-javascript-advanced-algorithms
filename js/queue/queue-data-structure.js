class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {

    if (this.queueControl.length >= this.MAX_SIZE) {
      return false
    } else {
      return true
    }
    // ... your code goes here
  }

  isEmpty() {
    if (this.queueControl.length === 0) {
      return true
    } else {
      return false
    }
    // ... your code goes here
  }

  enqueue(item) {
    if (!this.canEnqueue()) {
      throw new Error('QUEUE_OVERFLOW') 
    }

    this.queueControl.push(item)
      
      return this.queueControl
    // ... your code goes here
  }

  dequeue() {
    if (!!this.isEmpty()) {
      throw new Error('QUEUE_UNDERFLOW')
    } else {

    return this.queueControl.shift()

  }
    // ... your code goes here
  }

  display() {
    return this.queueControl
    // ... your code goes here
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
