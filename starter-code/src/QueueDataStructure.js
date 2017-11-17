function QueueDataStructure (){
  this.queueControl = [];
  this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function () {
  return this.queueControl.length === 0;
};

QueueDataStructure.prototype.canEnqueue = function () {
  return this.queueControl.length != this.MAX_SIZE;
};

QueueDataStructure.prototype.enqueue = function (x) {
  if (!this.canEnqueue()){
    return "Queue Overflow";
  }
  this.queueControl.unshift(x);
  return this.queueControl;
};

QueueDataStructure.prototype.dequeue = function () {
  if (this.queueControl.length === 0){
    return "Queue Underflow";
  }
  return this.queueControl[this.queueControl.length-1];
};