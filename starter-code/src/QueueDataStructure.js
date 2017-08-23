function QueueDataStructure () {
  this.queueControl = []
  this.MAX_SIZE = 1
}

QueueDataStructure.prototype.isEmpty = function() {
  return this.queueControl.length == 0 ? true : false 
}

QueueDataStructure.prototype.canEnqueue = function() {
  return this.queueControl.length < this.MAX_SIZE ? true : false 
}

QueueDataStructure.prototype.enqueue = function(x) {
  this.queueControl.unshift(x) 
  return this.queueControl.length > this.MAX_SIZE ? 'Queue Overflow' : this.queueControl
}

QueueDataStructure.prototype.dequeue = function(x) {
  this.queueControl.shift(x)
  return this.queueControl.length == 0 ? 'Queue Underflow' : this.queueControl[this.queueControl.length - 1]
}
