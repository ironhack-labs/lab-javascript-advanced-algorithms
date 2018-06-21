function QueueDataStructure (Array) {
  this.queueControl = [];
  this.MAX_SIZE = 2;
}

var queue = new QueueDataStructure();

QueueDataStructure.prototype.isEmpty = function () {
  if (this.queueControl.length == 0) {
    return true;
  } else {
    return false;
  }
};
QueueDataStructure.prototype.canEnqueue = function () {
  if (this.queueControl.length == this.MAX_SIZE) {
    return false;
  } else {
    return true;
  }
};
QueueDataStructure.prototype.enqueue = function (e) {
  if (this.canEnqueue()) {
    this.queueControl.unshift(e);
    return this.queueControl;
  } else {
    return "Queue Overflow";
  }
};
QueueDataStructure.prototype.dequeue = function () {
  if (this.isEmpty()) {
    return "Queue Underflow";
  } else {
    return this.queueControl.pop();
  }
};