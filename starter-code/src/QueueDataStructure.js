function QueueDataStructure () {
  this. queueControl = [];
  this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function() {
  if (this.queueControl.length === 0) {
    return true;
  }
  return false;
}

QueueDataStructure.prototype.canEnqueue = function() {
  if (this.queueControl.length < this.MAX_SIZE) {
    return true;
  }
  return false;
}

QueueDataStructure.prototype.enqueue = function(enqueueObj) {
  if (this.canEnqueue()) {
    this.queueControl.unshift(enqueueObj);
    return this.queueControl;
  }
  qflow = 1;
  return 'Queue Overflow';
}
QueueDataStructure.prototype.dequeue = function(dequeueObj) {
  if (!this.isEmpty) {
    return this.queueControl.pop(dequeueObj);
  }
  qflow = 2;
  return 'Queue Underflow';
}
