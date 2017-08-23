function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 10;
}


QueueDataStructure.prototype.isEmpty = function() {
  if (this.queueControl.length > 0) {
    return false;
  } else {
    return true;
  }
};

QueueDataStructure.prototype.canEnqueue = function() {
  if (this.queueControl.length === this.MAX_SIZE) {
    return false;
  } else {
    return true;
  }
};

QueueDataStructure.prototype.enqueue = function(element) {
  if (this.queueControl.length < this.MAX_SIZE) {
    this.queueControl.unshift(element);
    return this.queueControl;
  } else {
    return "Queue Overflow";

  }
};

QueueDataStructure.prototype.dequeue = function() {
  if (this.queueControl.length === 0) {
    return "Queue Underflow";
  } else {
    this.queueControl.shift();
    return this.queueControl[this.queueControl.length - 1];
  }

};
