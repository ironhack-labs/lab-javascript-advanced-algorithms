class QueueDataStructure{
  constructor(){
    this.queueControl = [];
    this.MAX_SIZE = 8;


  }
  isEmpty()  {
    return this.queueControl.length > 0 ?  false : true;
    
  }
  canEnqueue()  {
    return this.MAX_SIZE >= 8  ? true : false
  }
  enqueue(ele)  {
    if (this.canEnqueue()){
      this.queueControl.unshift(ele);
      return this.queueControl;    
    }else{
      return 'Queue Overflow';
    }
  }
  dequeue(ele)  {
    if (this.isEmpty()){
      return "Queue Underflow";
    }else{
      return this.queueControl.pop(ele)
    }

  }
}