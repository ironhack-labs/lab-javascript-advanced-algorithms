function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 100;
}

QueueDataStructure.prototype.isEmpty = function() {
  if (this.queueControl.length === 0) {
    return true;
  } else {
    return false;
  }
};

QueueDataStructure.prototype.canEnqueue = function() {
  return this.queueControl.length < this.MAX_SIZE;
};

QueueDataStructure.prototype.enqueue = function(item) {
  if (this.queueControl.length === this.MAX_SIZE) {
    return "Queue Overflow";
  } else {
    this.queueControl.unshift(item);
    return this.queueControl;
  }
};

QueueDataStructure.prototype.dequeue = function() {
  if (this.queueControl.length === 0) {
    return "Queue Underflow";
  } else {
    const removedItemInQueue = this.queueControl.pop();
    return removedItemInQueue;
  }
};
