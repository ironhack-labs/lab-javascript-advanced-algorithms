function QueueDataStructure() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function() {
  if (this.queueControl.length == 0 || this.queueControl == undefined)
    return true;
  return false;
}

QueueDataStructure.prototype.canEnqueue = function() {
  if (this.MAX_SIZE == this.queueControl.length)
    return false;
  return true;
}

QueueDataStructure.prototype.enqueue = function(elem) {
  if (this.canEnqueue() === true) {
    this.queueControl.unshift(elem);
    return this.queueControl;
  }
  return "Queue Overflow";
}

QueueDataStructure.prototype.dequeue = function() {
  if (this.isEmpty() === true)
    return "Queue Underflow";
  this.queueControl.shift();
  return this.queueControl[0];
}
