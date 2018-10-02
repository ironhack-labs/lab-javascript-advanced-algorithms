function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 9;
}

QueueDataStructure.prototype.isEmpty = function() {
  if (this.queueControl.length > 0) {
    return false;
  } else {
    return true;
  }
};


