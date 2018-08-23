function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function() {
  if (this.queueControl.length === 0) {
    return true;
  }
  return false;
};

QueueDataStructure.prototype.canEnqueue = function() {
  if (this.queueControl.length < this.MAX_SIZE) {
    return true;
  }
  return false;
};

QueueDataStructure.prototype.enqueue = function(value) {
  if (this.queueControl.length == this.MAX_SIZE) {
    return "Queue Overflow";
  }
  this.queueControl.unshift(value);

  return this.queueControl;
};

QueueDataStructure.prototype.dequeue = function() {
  if (this.queueControl.length <= 0) {
    return "Queue Underflow";
  }

  return this.queueControl.pop();
};
