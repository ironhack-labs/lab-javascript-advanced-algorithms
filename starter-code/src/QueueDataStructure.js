function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 1;
}

QueueDataStructure.prototype.isEmpty = function () {
  if (this.queueControl.length === 0) {
    return true;
  }
  return false;
};

QueueDataStructure.prototype.canEnqueue = function () {
  if (this.queueControl.length < this.MAX_SIZE) {
    return true;
  }
  return false;
};

QueueDataStructure.prototype.enqueue = function (queueUnit) {
  if (this.canEnqueue()) {
    this.queueControl.unshift(queueUnit);
    return this.queueControl;
  }
  return 'Queue Overflow';
};

QueueDataStructure.prototype.dequeue = function () {
  if (this.isEmpty()) {
    return 'Queue Underflow';
  }
  let lastElement = this.queueControl.slice(-1).pop();
  this.queueControl.pop();
  return lastElement;
};
