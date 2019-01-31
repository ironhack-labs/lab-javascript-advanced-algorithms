class QueueDataStructure {

  constructor(maxNum) {
    this.MAX_SIZE = Number(maxNum);
     this.queueControl = [];
  }

  
  isEmpty() { 
    if (this.queueControl.length == 0){
      return true;
    }
    else {
      return false;
    }
  };

  canEnqueue(){
    if(this.queueControl.length == this.MAX_SIZE){
      return false;
    }
    else {
      return true;
    }
  }
  

  enqueue(element){
    if (this.canEnqueue() == true){
    this.queueControl.unshift(element);
    return this.queueControl;
    }
    else {
      return 'Queue Overflow';
    }
  }

  dequeue(){
    if(!this.isEmpty()){
    return this.queueControl.pop();
    }
    else {
      return 'Queue Underflow';
    }
  }


}
 