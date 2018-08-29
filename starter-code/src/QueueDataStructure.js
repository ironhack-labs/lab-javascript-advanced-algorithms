function QueueDataStructure (max) {
  this.queueControl = [];
  this.MAX_SIZE = max || 8;
}
QueueDataStructure.prototype.isEmpty = function () {
  return this.queueControl.length == 0
}
QueueDataStructure.prototype.canEnqueue = function () {
  return this.queueControl.length < this.MAX_SIZE
}
QueueDataStructure.prototype.enqueue = function (element) {
  if (this.canEnqueue()) {
    this.queueControl.unshift(element);
    return this.queueControl
  }
  return "Queue Overflow"
}
QueueDataStructure.prototype.dequeue = function (element) {
  if (!this.isEmpty()) {
    return this.queueControl.splice(-1,1)[0];
  }
  return "Queue Underflow"
}

