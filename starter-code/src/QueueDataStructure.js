function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 6;
}

QueueDataStructure.prototype.isEmpty = function() {
  return this.queueControl.length === 0 ? true : false;
};

QueueDataStructure.prototype.canEnqueue = function() {
  return this.queueControl.length < this.MAX_SIZE ? true : false;
};

QueueDataStructure.prototype.enqueue = function(arg) {
  if (this.queueControl.length < this.MAX_SIZE) {
    this.queueControl.unshift(arg);
    return this.queueControl;
  } else {
    return "Queue Overflow";
  }
};

QueueDataStructure.prototype.dequeue = function(rmvarg) {
  if (this.queueControl.length === 0) {
    return "Queue Underflow";
  } else {
    return this.queueControl.pop(rmvarg);
  }
};
