function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 9;
}

QueueDataStructure.prototype.isEmpty = function() {
  if (this.queueControl.length === 0) {
    return true;
  } else {
    return false;
  }
};

QueueDataStructure.prototype.canEnqueue = function() {
  if (this.queueControl.length < this.MAX_SIZE) {
    return true;
  } else {
    return false;
  }
};

QueueDataStructure.prototype.enqueue = function(val) {
  if (this.canEnqueue()) {
    this.queueControl.unshift(val);
    return this.queueControl;
  } else {
  return "Queue Overflow";
  }
}

QueueDataStructure.prototype.dequeue = function(val) {
  if (!this.isEmpty()) {
    return this.queueControl.pop(val);
  } else {
    return 'Queue Underflow';
  }
  }
  