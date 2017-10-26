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
  }
};

QueueDataStructure.prototype.enqueue = function(number) {
  if (this.canEnqueue()) {
    this.queueControl.push(number);
    return this.queueControl;
  } else {
    return 'Queue Overflow';
  }
};


QueueDataStructure.prototype.dequeue = function() {
  if (this.isEmpty()) {
    this.queueControl.unshift(this.queueControl.length[this.ququeueControl.length - 1]);
  }
};
