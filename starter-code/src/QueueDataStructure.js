function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 500;
}
QueueDataStructure.prototype.isEmpty = function() {
  if (this.queueControl.length === 0) {
    return true;
  }
  return false;
};
QueueDataStructure.prototype.canEnqueue = function() {
  if (this.MAX_SIZE > this.queueControl.length) {
    return true;
  }
  return false;
};
QueueDataStructure.prototype.enqueue = function(element) {
  if (this.canEnqueue()) {
    this.queueControl.unshift(element);
    return this.queueControl;
  }
  return "Queue Overflow";
};
QueueDataStructure.prototype.dequeue = function() {
  if(!this.isEmpty()){
    return this.queueControl.pop();
  }
  return 'Queue Underflow';
};
