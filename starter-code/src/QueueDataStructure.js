function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 10;
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
  } else {
    return false;
  }
};

QueueDataStructure.prototype.enqueue = function(el) {
  if (this.canEnqueue()) {
    this.queueControl.unshift(el);
    return this.queueControl;
  } else {
    return "Queue Overflow";
  }
};

QueueDataStructure.prototype.dequeue = function() {
  if (!this.isEmpty()) {
    return this.queueControl.pop();
  } else {
    return "Queue Underflow";
  }
};
