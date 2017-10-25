function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 8;
}

QueueDataStructure.prototype.isEmpty = function(){
  if(this.queueControl.length > 0){
    return false;
  } else{
    return true;
  }
};

QueueDataStructure.prototype.canEnqueue = function(){
  if(this.queueControl.length == this.MAX_SIZE){
    return false;
  } else{
    return true;
  }
};

QueueDataStructure.prototype.enqueue = function(arg){
  if(this.queueControl.length == this.MAX_SIZE){
    return 'Queue Overflow';
  } else{
    this.queueControl.push(arg);
    return this.queueControl;
  }
};

QueueDataStructure.prototype.dequeue = function(){
  var noElements = this.queueControl.length;
  if(noElements == 0){
    return 'Queue Underflow';
  } else{
    this.queueControl.shift();
    var firstElement = this.queueControl.length -1;
    return this.queueControl[firstElement];
  }
};
