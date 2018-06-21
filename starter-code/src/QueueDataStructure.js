function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 8;
}

QueueDataStructure.prototype.isEmpty = function() {
  return this.queueControl.length < 1;
};

QueueDataStructure.prototype.canEnqueue = function() {
  return this.queueControl.length < this.MAX_SIZE;
};

QueueDataStructure.prototype.enqueue = function(item) {
  if (this.canEnqueue()) {
    this.queueControl.unshift(item);
    return this.queueControl;
  }
  return "Queue Overflow";
};

QueueDataStructure.prototype.dequeue = function() {
  if (this.isEmpty()) {
    return "Queue Underflow";
  }
  return this.queueControl.pop();
};
