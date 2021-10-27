class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here

    if(this.queueControl.length<this.MAX_SIZE) {return true}
      else return false;

  }

  isEmpty() {
    if(this.queueControl.length==0){return true;}
    else return false;
    // ... your code goes here
  }

  enqueue(item) {
    // ... your code goes here
    if(this.canEnqueue()) {this.queueControl.push(item)
  return this.queueControl}
    else {throw new RangeError("QUEUE_OVERFLOW")}






  }

  dequeue() {
    // ... your code goes here
    if(!this.isEmpty()) {
      let removedItem = this.queueControl.shift();
      return removedItem
    }
    else {throw new RangeError("QUEUE_UNDERFLOW")}
      





  }

  display() {
    // ... your code goes here
 return this.queueControl;





  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
