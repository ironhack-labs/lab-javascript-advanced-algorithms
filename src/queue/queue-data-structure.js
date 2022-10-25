class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    return this.queueControl.length <  this.MAX_SIZE ? true : false;
  }

  isEmpty() {
    return !this.queueControl.length ? true : false;
  }

  enqueue(item) {
    if(this.canEnqueue()){
      this.queueControl.push(item);
      return this.queueControl;
    }
    throw new Error('QUEUE_OVERFLOW');
  }

  dequeue() {
    if(!this.isEmpty()){
      return this.queueControl.shift();
    }
    throw new Error('QUEUE_UNDERFLOW');
  }

  display() {
    return this.queueControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
