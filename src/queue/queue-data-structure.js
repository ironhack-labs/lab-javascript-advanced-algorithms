class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if(this.queueControl.length === 0){
      return true;
    }
    else if(this.queueControl.length === this.MAX_SIZE){
      return false;
    }
  }

  isEmpty() {
    if(this.queueControl.length === 0){
      return true;
    }
    else if(this.queueControl.length > 0){
      return false;
    }
  }

  enqueue(item) {
    if(this.queueControl.length === this.MAX_SIZE){
      throw new Error ("QUEUE_OVERFLOW")
    }

    this.queueControl.push(item)
    return this.queueControl
  }

  dequeue() {
    if (this.queueControl.length === 0){
      throw new Error ("QUEUE_UNDERFLOW")
    }

    let queueRemoved = this.queueControl.shift();

    return queueRemoved;
  }

  display() {
    return this.queueControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
