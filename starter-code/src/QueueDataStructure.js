function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 20;
}

QueueDataStructure.prototype.isEmpty = function() {
  return this.queueControl.length === 0;
};

QueueDataStructure.prototype.canEnqueue = function() {
  return this.queueControl.length < this.MAX_SIZE;
};

QueueDataStructure.prototype.enqueue = function(elem) {
  if (this.canEnqueue()) {
    this.queueControl.unshift(elem);
    return this.queueControl;
  } else {
    return 'Queue Overflow';
  }
};

QueueDataStructure.prototype.dequeue = function() {
  if (this.isEmpty()) {
    return 'Queue Underflow';
  } else {
    return this.queueControl.pop();
  }

};
