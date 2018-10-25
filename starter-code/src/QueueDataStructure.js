function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 10;
}
QueueDataStructure.prototype.isEmpty = function () {
  if (this.queueControl.length === 0) {
    return true;
  }
  return false;
};

QueueDataStructure.prototype.canEnqueue = function () {
  if (this.queueControl.length === this.MAX_SIZE) {
    return false;
  }
  return true;
};

QueueDataStructure.prototype.enqueue = function (add) {
  if (this.canEnqueue()) {
    this.queueControl.unshift(add);

    return this.queueControl;
  }
  return 'Queue Overflow';
};

QueueDataStructure.prototype.dequeue = function () {
  if (this.isEmpty()) {
    return 'Queue Underflow';
  }
  return this.queueControl.pop();
};


// col-sm-12
// col-sm-4 ou 3
