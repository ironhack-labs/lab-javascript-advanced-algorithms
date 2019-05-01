class QueueDataStructure {
  constructor(){
    this.queueControl = [];
    this.MAX_SIZE = 8;
  }
  isEmpty(){
    if(this.queueControl.length === 0){
      return true
    }
    else {
      return false
    }
  }
  canEnqueue(){
    if(this.queueControl.length !== this.MAX_SIZE){
      return true
    }
    else {
      return false
    }
  }
  enqueue(newElement){
    if(this.canEnqueue()){
      this.queueControl.unshift(newElement)
      return this.queueControl
    }
    else{
      return 'Queue Overflow'
    }
  }
  dequeue() {
    if(!this.isEmpty()){
      return this.queueControl.pop()
    }
    else {
      return 'Queue Underflow'
    }
  }

}

 let queue = new QueueDataStructure();