function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;

}
QueueDataStructure.prototype.isEmpty = function(){
    return this.queueControl.length === 0;
};

QueueDataStructure.prototype.canEnqueue = function(){
  if (this.MAX_SIZE > this.queueControl.length){
      return true;
  } else {
      return false;
  }
};
QueueDataStructure.prototype.enqueue = function(arg){
  if (this.MAX_SIZE > this.queueControl.length){
    this.queueControl.unshift(arg);
      return this.queueControl;
  } else {
      return ("Queue Overflow");
  }
};

QueueDataStructure.prototype.dequeue = function(arg){
  if (this.queueControl.length === 0){
      return "Queue Underflow";
  } else {
      return this.queueControl[this.queueControl.length];
}
};

QueueDataStructure.prototype.pop = function(){
  if (this.queueControl.length === 0){
      return "Queue Underflow";
  } else {
      return this.queueControl[this.queueControl.length];
  }
};
