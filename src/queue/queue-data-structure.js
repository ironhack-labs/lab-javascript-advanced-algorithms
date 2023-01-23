class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here
    if(this.queueControl.length === 0) return true;
    else return false;
  }

  isEmpty() {
    // ... your code goes here
    if(this.queueControl.length === 0) return true;
    else return false;
  }

  enqueue(item) {
    // ... your code goes here
    if(this.canEnqueue()) {
      this.queueControl.unshift(item);
      return this.queueControl;
    }else{
      throw new Error('QUEUE_OVERFLOW')
    }
  
  }

  dequeue() {
    // ... your code goes here
    if(this.queueControl.length <= 0) throw new Error('QUEUE_UNDERFLOW')
    if(!this.isEmpty()) {
      
      return this.queueControl.pop();
    }
  }

  display() {
    // ... your code goes here
    return this.queueControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
