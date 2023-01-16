class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here
    if (this.queueControl.length < this.MAX_SIZE) {
      return true
    } else return false
  }

  isEmpty() {
    // ... your code goes here
    
    if (this.queueControl.length < 1) {
      return true
    } else return false
  
  }

  enqueue(item) {
    // ... your code goes here
    const newArr = JSON.parse(JSON.stringify(this.queueControl));

    if(this.canEnqueue()) {
      newArr.push(item);
      this.queueControl = newArr;

      return this.queueControl;
    } else throw new Error('QUEUE_OVERFLOW')
  }

  dequeue() {
    // ... your code goes here
    const newArr = JSON.parse(JSON.stringify(this.queueControl));

    if(this.isEmpty()) {
      throw new Error('QUEUE_UNDERFLOW')
    } else {
      const element = newArr.shift();
      this.queueControl = newArr;
      return element;
    }
  }

  display() {
    // ... your code goes here
    return this.queueControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
