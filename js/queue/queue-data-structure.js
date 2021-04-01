class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    return this.queueControl
  }

  canEnqueue() {
    if (this.queueControl.length <= this.MAX_SIZE){
      return true
    }
    return false
  }

  isEmpty() {
    if(this.queueControl.length <= 0){
      return true
    }
    return false
  }

  enqueue(item) {
    if(this.canEnqueue()){
      this.queueControl.push(item)
      return this.queueControl
      

    }else
    return "Stack Overflow"

  }

  dequeue() {
    if(!this.isEmpty){
      
      return this.queueControl.pop()
    }
    return "Queue Underflow"
  }
}
