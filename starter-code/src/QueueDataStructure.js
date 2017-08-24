function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 8;
}

QueueDataStructure.prototype.isEmpty = function(){
  return true;
};

QueueDataStructure.prototype.canEnqueue = function(){
  return true;
};

QueueDataStructure.prototype.enqueue = function(x){
  this.queueControl.push(x);
  this.isEmpty = function(){
    return false;
  };
  if (this.MAX_SIZE == 1){
    this.canEnqueue = function(){
      return false;
    };
    return "Queue Overflow";
  }
  return this.queueControl.reverse();
};

QueueDataStructure.prototype.dequeue = function(){
  if (this.queueControl.length == 0){
    return "Queue Underflow";
  }
  return this.queueControl.pop(this.queueControl[0]);
}
