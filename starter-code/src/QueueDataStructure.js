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
  if (this.isEmpty() || this.queueControl.length < this.MAX_SIZE) {
    return true;
  } else {
    return false;
  }
};

QueueDataStructure.prototype.enqueue = function(elment) {
  if (this.canEnqueue()) {
    this.queueControl.unshift(elment);
    this.isEmpty();
    return this.queueControl;
  } else {
    return false;
  }
};

QueueDataStructure.prototype.dequeue = function() {
  if (!this.isEmpty()) {
    return this.queueControl.shift();
  } else {
    return false;
  }
};
