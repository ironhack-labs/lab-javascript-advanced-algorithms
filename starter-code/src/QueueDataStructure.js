function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 8;
}

QueueDataStructure.prototype.isEmpty = function() {
  if (this.queueControl.length == 0) {
    return true;
  } else {
    return false;
  }
};

QueueDataStructure.prototype.canEnqueue = function() {
  if (this.MAX_SIZE == this.queueControl.length) {
    return false;
  } else {
    return true;
  }
};

QueueDataStructure.prototype.enqueue = function(e) {
  if (this.canEnqueue()) {
    this.queueControl.unshift(e);
    return this.queueControl;
  } else {
    return "Queue Overflow";
  }
};

QueueDataStructure.prototype.dequeue = function(e) {
  if (this.isEmpty()) {
    return "Queue Underflow";
  } else {
    this.queueControl.shift(e);
    return this.queueControl[0];
  }
};


