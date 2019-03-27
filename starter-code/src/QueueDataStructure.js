class QueueDataStructure {
    queueControl = [];
    MAX_SIZE = 10;

    isEmpty(){
      return this.queueControl.length == 0 ? true : false;
    }
  
    canEnqueue(){
      return this.queueControl.length < this.MAX_SIZE ? true : false;
    }
  
    enqueue(a){
      if (this.canEnqueue()) {
        this.queueControl.unshift(a);
        return this.queueControl;
      }else{
        return "Queue Overflow";
      }    
    }
  
    dequeue(){
      if(this.queueControl.length == 0){
        return 'Queue Underflow';
      }else{
        return this.queueControl.pop();
      }    
    }
  
  
  }