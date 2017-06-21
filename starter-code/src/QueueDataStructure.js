function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 8;
}

QueueDataStructure.prototype.isEmpty = function() {
  if (this.queueControl.length === 0) {
    return true;
  } else {
    return false;
  }
};
QueueDataStructure.prototype.canEnqueue = function() {
  if (this.queueControl.length !== this.MAX_SIZE) {
    return true;
  } else {
    return false;
  }
};
QueueDataStructure.prototype.enqueue = function(elements) {
  if (this.queueControl.length !== this.MAX_SIZE) {
    this.queueControl.unshift(elements);
    return this.queueControl;
  } else {
    return "Queue Overflow";
  }
};

QueueDataStructure.prototype.dequeue = function() {
  if (this.queueControl.length !== 0) {
    return this.queueControl[this.queueControl.length - 1];
  } else {
    return "Queue Underflow";
  }
};
