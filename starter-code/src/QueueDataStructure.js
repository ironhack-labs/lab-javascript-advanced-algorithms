class QueueDataStructure{


  constructor(maxNumElements){
    this.MAX_SIZE = Number(maxNumElements);
    this.queueControl = [];

  }

  isEmpty(){
    return (this.queueControl.length == 0);
  }

  canEnqueue(){
    return !(this.queueControl.length == this.MAX_SIZE);
  }

  enqueue(element){
    if(this.canEnqueue()){
      console.log(element);
      this.queueControl.unshift(element);
      console.log(this.queueControl);
      return this.queueControl;
    }
    return `Queue Overflow`;
  }

  dequeue(){
    if(!this.isEmpty()){
      return this.queueControl.pop();
    }
      return `Queue Underflow`;
  }

}

