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
    if(this.queueControl.lenght === 0){ 
      return true
    } else {
      return false
    }
  }

  enqueue(item) {
    // ... your code goes here
    if(this.canPush()){
      this.queueControl.push(item)
      return this.queueControl
    } else {
      return "Stack Overflow"
    }
  }

  dequeue() {
    // ... your code goes here
    if(this.isEmpty()){
      return "Queue Underflow"
    } else {
      return this.queueControl.pop()
    }
  }
}
