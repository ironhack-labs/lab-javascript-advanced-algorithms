function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 15;
}

QueueDataStructure.prototype.isEmpty = function(){
  return this.queueControl.length === 0;
};

QueueDataStructure.prototype.canEnqueue = function() {
  if (this.queueControl.length < this.MAX_SIZE) {
    return true;
  }
  else {
    return false;
  }
};

QueueDataStructure.prototype.enqueue = function(e) {
  if (this.canEnqueue()) {
    this.queueControl.unshift(e);
    return this.queueControl;
  } else {
    return "Queue Overflow";
  }
};

QueueDataStructure.prototype.dequeue = function() {
  if (this.isEmpty()) {
    return "Queue Underflow";
  }
  return this.queueControl.pop();
};
