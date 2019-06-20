class QueueDataStructure  {
  constructor(){
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  isEmpty(){
    if(this.queueControl.length > 0){
      return false;
    }else{
      return true;
    }
  }

  canEnqueue(){
    if(this.queueControl.length < this.MAX_SIZE){
      return true;
    }else{
      return false;
    }
  }

  enqueue(arg){
    if(this.canEnqueue()){
    this.queueControl.unshift(arg);
    return this.queueControl;
  }else{
    return "Queue Overflow"
  }
  }

  dequeue(){
    if(!this.isEmpty()){
    let dequeue = this.queueControl.pop();
    return dequeue;
    }else{
      return 'Queue Underflow';
    }
  }

}