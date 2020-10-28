class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    // ... your code goes here
  }

  canEnqueue() {
    // ... your code goes here
    if (this.queueControl.length < this.MAX_SIZE) { 
      return true
     } else {
       return false
      }
  }

  isEmpty() {
    // ... your code goes here
  }

  enqueue(item) {
    // ... your code goes here
  }

  dequeue() {
    // ... your code goes here
  }
}
