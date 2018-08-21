function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 10;
};

QueueDataStructure.prototype.isEmpty = function() {
  return this.queueControl.length === 0;
};

QueueDataStructure.prototype.canEnqueue = function() {
  return this.queueControl.length < this.MAX_SIZE;
};

QueueDataStructure.prototype.enqueue = function(e) {
  if (this.canEnqueue()) {
    this.queueControl.unshift(e);
    return this.queueControl;
  }
  return "Queue Overflow"
};

QueueDataStructure.prototype.dequeue = function() {
  return (!this.isEmpty()) ? this.queueControl.pop() : "Queue Underflow";
};