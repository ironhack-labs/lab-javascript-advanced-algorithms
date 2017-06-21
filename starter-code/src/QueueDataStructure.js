function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 5;
  QueueDataStructure.prototype.isEmpty = function () {
    return this.queueControl.length === 0  ? true : false
  };
  QueueDataStructure.prototype.canEnqueue = function () {
    return this.queueControl.length <  this.MAX_SIZE ? true : false
  };
  QueueDataStructure.prototype.enqueue = function (element) {
    this.queueControl.push(element);
    return this.canEnqueue() ? this.queueControl.reverse() : 'Queue Overflow'
  };
  QueueDataStructure.prototype.dequeue = function (element) {
    this.queueControl.pop(element);
    return this.isEmpty() ? 'Queue Underflow' : this.queueControl[this.queueControl.length - 1]
  };
}
