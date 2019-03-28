class QueueDataStructure {
  constructor(){
    this.queueControl = [];
    this.MAX_SIZE = 9;

  }

  isEmpty(){
    if (this.queueControl.length == 0)
    return true;
    else return false;

  }

  canEnqueue(){
    if (this.queueControl.length < this.MAX_SIZE)
    return true;
    else return false;

  }

  enqueue(val){
    if (this.canEnqueue()){
      this.queueControl.unshift(val); return this.queueControl;}
   else return "Queue Overflow";
  }

  dequeue(val){
      if (this.isEmpty()){
        return "Queue Underflow";}
        else return this.queueControl.pop(val);
     
  }

}