function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 8;
}

QueueDataStructure.prototype.isEmpty = function () {
  return (this.queueControl.length == 0)
}
QueueDataStructure.prototype.canEnqueue = function () {
  return (this.queueControl.length < this.MAX_SIZE)
}
QueueDataStructure.prototype.enqueue = function (a) {
  if (!(this.canEnqueue())) {
      return 'Queue Overflow'
  }
  this.queueControl.unshift(a);
  return this.queueControl
}

QueueDataStructure.prototype.dequeue = function () {
  if (this.isEmpty()) {
      return 'Queue Underflow'
  }
  return this.queueControl.pop();
}