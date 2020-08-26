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
    if(this.queueControl.length < this.MAX_SIZE){
      return true
    } else{
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
    
    this.queueControl.unshift(item)
    this.isEmpty()
    if(this.queueControl.length > this.MAX_SIZE){
      this.canEnqueue()
      return 'Queue Overflow'
    }
    return this.queueControl
  }

  dequeue() {
    // ... your code goes here
    if(this.queueControl.length === 0){
      return 'Queue Underflow'
    }
    const out = this.queueControl.pop()

    return out
  }
}
