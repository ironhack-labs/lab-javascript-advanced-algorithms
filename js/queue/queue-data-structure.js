class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true
    }
    if (this.queueControl.length >= this.MAX_SIZE) {
      return false
    }
  }

  isEmpty() {
    if (this.queueControl.length === 0) {
      return true
    }
    if (this.queueControl.length > 0) {
      return false
  }
}

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.push(item)
      return this.queueControl
    }
    else {
      throw new Error('QUEUE_OVERFLOW');
    }
  }

  dequeue(item) {
    if (this.isEmpty() === false) {
      return this.queueControl.shift(item)
  }
  else {
    throw new Error('QUEUE_UNDERFLOW')
  }
  }

  display() {
    return this.queueControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;



// pop(item) {
//   if (this.isEmpty() === false) {
//     return this.stackControl.pop(item)
//   }
//   else {
//     throw new Error('STACK_UNDERFLOW')
//   }

// }



// display() {
//   
// }  
// }