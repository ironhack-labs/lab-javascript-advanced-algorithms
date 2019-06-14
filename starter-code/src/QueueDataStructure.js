class QueueDataStructure {
  constructor(){
    this.queueControl = []
    this.MAX_SIZE = 8
  }
  
  isEmpty(){
    return this.queueControl.length === 0
  }
  canEnqueue(){
    if(this.queueControl.length == this.MAX_SIZE){
    return false
    }
    return true
  }

  enqueue(element){
    if(this.queueControl.length == this.MAX_SIZE){
      return "Queue Overflow"
    }
    else{
      this.queueControl.unshift(element)
      return this.queueControl
    }
  }
  dequeue(element){
    if(!this.isEmpty()){
      return this.queueControl.shift(element)
    }
    else{
      return "Queue Underflow"
    }
  }
  
}