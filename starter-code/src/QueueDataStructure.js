function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function() {
  return this.queueControl.length === 0;
};

QueueDataStructure.prototype.canEnqueue = function() {
  return this.queueControl.length < this.MAX_SIZE;
};

QueueDataStructure.prototype.enqueue = function(element) {
  if (this.queueControl.length === this.MAX_SIZE) {
    return "Queue Overflow";
  }
  this.queueControl.splice(0, 0, element);
  return this.queueControl;
};

QueueDataStructure.prototype.dequeue = function() {
  if (this.queueControl.length === 0) {
    return "Queue Underflow";
  }
  return this.queueControl.pop();
};
