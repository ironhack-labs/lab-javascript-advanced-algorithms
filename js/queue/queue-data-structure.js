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
    if(this.queueControl.length === 0){ 
      return true
    } else {
      return false
    }
  }

  enqueue(item) {
    // ... your code goes here
    if(this.canEnqueue()){
      this.queueControl.push(item)
      return this.dequeueControl
    } else {
      return "Queue Overflow"
    }
  }

  dequeue() {
    // ... your code goes here
    if(this.isEmpty()){
      return "Queue Underflow"
    } else {
      return this.enqueueControl.pop()
    }
  }
}
