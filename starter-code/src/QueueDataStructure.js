function QueueDataStructure () {
  this.queueControl = []
  this.MAX_SIZE = 1
}

QueueDataStructure.prototype.isEmpty = function () {
  return (this.queueControl <= 0) ? true : false
}

QueueDataStructure.prototype.canEnqueue = function () {
  return (this.MAX_SIZE == this.queueControl) ? true : false
}

QueueDataStructure.prototype.enqueue = function (a) {
  this.queueControl.push(a)
  if (this.canEnqueue()) { return this.queueControl } else { return 'Queue Overflow'}
}

QueueDataStructure.prototype.dequeue = function () {
  if (this.isEmpty()) { return 'Queue Underflow' } else { return this.queueControl }
}
