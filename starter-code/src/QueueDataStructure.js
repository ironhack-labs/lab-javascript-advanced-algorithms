function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 8;
}

QueueDataStructure.prototype.isEmpty = function() {
  if (this.queueControl.length == 0) {
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

QueueDataStructure.prototype.enqueue = function(e) {
  this.queueControl.unshift(e);
  if (this.MAX_SIZE < this.queueControl.length) {
    return "Queue Overflow";
  } else {
    return this.queueControl;
  }
};

QueueDataStructure.prototype.dequeue = function(e) {
  var lastElement = this.queueControl[this.queueControl.length - 1];
  this.queueControl.pop(e);
  if (this.queueControl.length == 0) {
    return "Queue Underflow";
  }
  return lastElement;
};
