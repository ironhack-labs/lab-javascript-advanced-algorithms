class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    // ... your code goes here
    return this.queueControl
  }

  canEnqueue() {
    // ... your code goes here
    if(this.queueControl.length < this.MAX_SIZE){
      return true
    }
    return false
  }

  isEmpty() {
    // ... your code goes here
    if(this.queueControl.length == 0){
      return true
    }
    return false
  }

  enqueue(item) {
    // ... your code goes here
    if( this.canEnqueue() ){
      this.queueControl.unshift(item)
      return this.display()
    }
    else {
      return 'Queue Overflow'
    }
  }

  dequeue() {
    // ... your code goes here
    if (this.isEmpty()){
      return 'Queue Underflow'
    }
    else {
      let firstElement = this.queueControl.pop()
      return firstElement
    }

  }
}
