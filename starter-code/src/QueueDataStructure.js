function QueueDataStructure(){
this.queueControl = [];
this.MAX_SIZE = 4;
}
QueueDataStructure.prototype.isEmpty = function(){
  if(this.queueControl.length == 0){
    return true;
  }else{
    return false;
  }
};

QueueDataStructure.prototype.canEnqueue = function(){
  if(this.queueControl.length < this.MAX_SIZE){
    return true;
  }else{
    return false;
  }
};

QueueDataStructure.prototype.enqueue = function(item){
  this.canEnqueue.push(item);
  if(this.canEnqueue()){
    return this.queueControl;
  }else{
    return 'Queue Overflow';
  }
};

QueueDataStructure.prototype.dequeue = function(){
  if(this.isEmpty()){
    return 'Queue Underflow';
  }else{
    return this.queueControl.dequeue();
  }
};
