function QueueDataStructure() {
  this.queueControl = []
  this.MAX_SIZE = 10
};

QueueDataStructure.prototype.isEmpty = function() {
  if (this.queueControl.length == 0) {
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
  };
};

QueueDataStructure.prototype.enqueue = function(num) {
  if (this.queueControl.length == this.MAX_SIZE) {
    return 'Queue Overflow'
  } else {
    this.queueControl.unshift(num);
  }
  return this.queueControl;
}
