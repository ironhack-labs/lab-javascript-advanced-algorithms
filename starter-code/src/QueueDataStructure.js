function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 5;
}

QueueDataStructure.prototype.isEmpty = function(){
  return this.queueControl.length == 0;
}

QueueDataStructure.prototype.canEnqueue = function(){
  return this.queueControl.length < this.MAX_SIZE;
}

QueueDataStructure.prototype.enqueue = function(elem){
  if(this.canEnqueue()){
    this.queueControl.splice(0,0,elem);
    return this.queueControl;
  }
  else{
    return "Queue Overflow";
  }
}

QueueDataStructure.prototype.dequeue = function(){
  if(this.queueControl.length > 0){
    return this.queueControl.pop();
  } else{
    return "Queue Underflow";
  }
}