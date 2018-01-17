function QueueDataStructure() {
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
  if (this.queueControl.length < this.MAX_SIZE) {
    return true;
  } else {
    return false;
  }
};

QueueDataStructure.prototype.enqueue = function(a) {
  if (this.queueControl.length >= this.MAX_SIZE) {
    return "Queue Overflow";
  } else {
    this.queueControl.push(a);
    return this.queueControl.reverse();
  }
};

QueueDataStructure.prototype.dequeue = function() {
  if (this.queueControl.length <= 0) {
    return "Queue Underflow";
  } else {
    return this.queueControl.pop();
  }
};
