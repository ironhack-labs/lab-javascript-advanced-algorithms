class QueueDataStructure {
  constructor () {
    this.queueControl= [];
    this.MAX_SIZE = 72;
  }
  isEmpty () {
    if(this.queueControl.length === 0){
      return true;
    }
    else{
      return false
    }
  }
  canEnqueue () {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    } 
    else {
      return false
    }
  }
  enqueue (string) {
    if(this.canEnqueue()){
      this.queueControl.unshift(string);
      return this.queueControl;
    }
    else {
      return "Queue Overflow"
    }
  }
  dequeue () {
    if (!this.isEmpty()){
      return this.queueControl.pop();
    }
    else {
      return "Queue Underflow"
    }
  }
}