
function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;
}

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
  }
};

QueueDataStructure.prototype.enqueue = function(number) {
  if (this.queueControl.length === this.MAX_SIZE) {
    return "Queue Overflow";

  } else {

    this.queueControl.unshift(number);
    return this.queueControl;
  }
};

QueueDataStructure.prototype.dequeue = function(number) {
  if (this.queueControl.length === 0) {
    return "Queue Underflow";

  } else {

    return this.queueControl[this.queueControl.length-1];
  }
};
