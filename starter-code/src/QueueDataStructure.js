function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 100;
}

QueueDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length === 0) {
    return true;
  } else {
    return false;
  }
};

QueueDataStructure.prototype.canEnqueue = function() {};
