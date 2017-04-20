function QueueDataStructure (stack) {
  this.queueControl = [];
  this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function(){
  var activeBars = this.queueControl.length;
  if (activeBars === 0){
    return true;
  } else {
    return false;
  }
};

QueueDataStructure.prototype.canEnqueue = function(){
  var activeBars = this.queueControl.length;
  if (activeBars < this.MAX_SIZE) {
    return true;
  } else {
    return false;
  }
};

QueueDataStructure.prototype.enqueue = function(bar){
  if (this.canEnqueue()){
    this.queueControl.unshift(bar);
    return this.queueControl;
  } else {
    return "Queue Overflow";
  }
};

QueueDataStructure.prototype.dequeue = function(bar){
  if (this.isEmpty()){
    return "Queue Underflow";
  } else {
    this.queueControl.shift(bar);
    return this.queueControl[0];
  }
};
