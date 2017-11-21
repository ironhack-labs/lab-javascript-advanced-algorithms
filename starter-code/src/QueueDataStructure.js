function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 50;
}

QueueDataStructure.prototype.isEmpty = function() {
  return this.queueControl.length === 0;
};

QueueDataStructure.prototype.canEnqueue = function() {
  return this.queueControl.length < this.MAX_SIZE;
};

QueueDataStructure.prototype.enqueue = function(arg) {
  if (this.canEnqueue()){
    this.queueControl.enqueue(arg);
    return this.queueControl;
  }else{
    return "Stack Overflow";}
};

QueueDataStructure.prototype.dequeue = function() {
  if (this.isEmpty()){
  return "Stack Underflow";
}else{
  return this.queueControl [this.queueControl.length -1];
}
};
