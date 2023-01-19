class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here
    if (this.queueControl.length <=10) return true
    else return false
  }

  isEmpty() {
    // ... your code goes here
    if (!this.queueControl.length) return true;
    else return false;
  }

  enqueue(item) {
    // ... your code goes here
    if (this.canEnqueue() === true) {
      return this.queueControl.push(item);
    }else if (this.canEnqueue() === false) {
      throw new Error('QUEUE_OVERFLOW');
    }
  }

  dequeue() {
    // ... your code goes here
    if (this.isEmpty() === false) {
      return this.queueControl.shift();
    } else throw new Error('QUEUE_UNDERFLOW')
  }
  

  display() {
    // ... your code goes here
    return this.queueControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
