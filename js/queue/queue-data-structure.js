class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if ((this.queueControl.length) < this.MAX_SIZE) {
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
      throw new Error('QUEUE_OVERFLOW') 
    }

    this.queueControl.push(item)

      return this.queueControl
  }


  dequeue() {
   const lastElem = this.queueControl.length -1
    if (this.isEmpty()) {

      throw new Error('QUEUE_UNDERFLOW')

    } else {

      return this.queueControl[lastElem]

    }
}

  display() {
    return this.queueControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
