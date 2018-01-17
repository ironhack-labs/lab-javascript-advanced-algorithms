function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 2;
}

QueueDataStructure.prototype.isEmpty = function() {
  return this.queueControl.length === 0 ? true : false;
};

QueueDataStructure.prototype.canEnqueue = function() {
  return this.queueControl.length < this.MAX_SIZE ? true : false;
};

QueueDataStructure.prototype.enqueue = function(e) {
  if (this.queueControl.length === this.MAX_SIZE) {
    return "Queue Overflow";
  } else {
    this.queueControl.unshift(e);
    return this.queueControl;
  }
};

QueueDataStructure.prototype.dequeue = function(e) {
  if (this.queueControl.length > 0) {
    return this.queueControl.pop();
  } else {
    return "Queue Underflow";
  }
};
