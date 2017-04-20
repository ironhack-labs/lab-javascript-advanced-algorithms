function QueueDataStructure (queueControl, MAX_SIZE) {
  this.queueControl = [];
  this.MAX_SIZE = 10;
}


QueueDataStructure.prototype.isEmpty = function () {

    if (this.queueControl === []) {
        return true;
      }

      else if (this.queueControl.push()) {
    return false;
      }
  return true;
  };


QueueDataStructure.prototype.canEnqueue = function (element) {
  if (this.queueControl.length === this.MAX_SIZE) {
    return false;
  }

  return true;
};




QueueDataStructure.prototype.enqueue = function (element) {
  if (this.queueControl === this.MAX_SIZE) {
    return "Stack Overflow";
  }

    this.queueControl.push(element);
    return this.queueControl;

};


QueueDataStructure.prototype.dequeue = function (element) {
  if (this.queueControl.length === 0) {
    return "Queue Underflow";
  }
  return this.queueControl.pop();

};
