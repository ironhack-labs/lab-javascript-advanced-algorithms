class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 8;
  }
  isEmpty(){
    if(this.queueControl.length===0)return true;
    return false;
  }
  canEnqueue(){
    if(this.queueControl.length<this.MAX_SIZE)return true;
    return false
  }
  enqueue(element){
    if(!this.canEnqueue())return "Queue Overflow"
    this.queueControl.push(element)
    return this.queueControl.reverse()
  }
  dequeue(){
    if(this.isEmpty()) return "Queue Underflow"
    return this.queueControl.pop()
  }
}
