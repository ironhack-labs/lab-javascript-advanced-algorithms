function QueueDataStructure () {
  this.queueControl=[];
  this.MAX_SIZE=100;
}

QueueDataStructure.prototype.isEmpty= function(){
    if (this.queueControl.length == 0) {
    return true;
  } else{
    return false;
  }
  };

QueueDataStructure.prototype.canEnqueue= function(){
    return (this.queueControl.length<this.MAX_SIZE)
  };

QueueDataStructure.prototype.enqueue=function(number){
    if (this.canEnqueue()){
      this.queueControl.unshift(number);
      return this.queueControl;
    }else{
      return "Queue Overflow";
    }
  }

QueueDataStructure.prototype.dequeue=function(number){
    if (this.isEmpty()) {
      return "Queue Underflow";
    }else{
      this.queueControl.shift(number);
      return this.queueControl[0];
    }
  }
