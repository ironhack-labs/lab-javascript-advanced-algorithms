class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here
    return this.queueControl.length!==this.MAX_SIZE;
  }

  isEmpty() {
    // ... your code goes here
    return !this.queueControl.length;
  }

  enqueue(item) {
    // ... your code goes here
    if(!this.canEnqueue()){
      throw new Error('QUEUE_OVERFLOW');
    }
    this.queueControl.push(item);
    return this.queueControl;
  }

  dequeue() {
    // ... your code goes here
    if(this.isEmpty()){
      throw new Error('QUEUE_UNDERFLOW');
    }
    return this.queueControl.shift();
  }

  display() {
    // ... your code goes here
    return this.queueControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
