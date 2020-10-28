class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    this.queueControl = [];
  }

  canEnqueue() {
    // ... your code goes here
    if(this.queueControl.length < this.MAX_SIZE){
      return true;
    }
    else{
      return false;
    }
  
  }

  isEmpty() {
    if(this.queueControl.length === 0){
      return true;
    }
    else{
      return false;
    }
  }

  enqueue(item) {
    // ... your code goes here
    if (this.canEnqueue()=== true) {
      this.queueControl.unshift(item)
      return this.queueControl
    } 
    else {
      return 'Queue Overflow'
    }
  }

  dequeue() {
    if (this.isEmpty()===true){
      return 'Queue Underflow'
    }
    else{
       return this.queueControl.pop()
    }
  }
}
