function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 8;
}

QueueDataStructure.prototype.isEmpty = function() {
  console.log("isEmpty", this.isEmpty())
  return this.queueControl.length === 0
}

QueueDataStructure.prototype.canEnqueue = function() {
  return this.queueControl.length < this.MAX_SIZE
}

QueueDataStructure.prototype.enqueue = function(element) {
  console.log("enqueue")
  if (!this.canEnqueue())
    return 'Queue Overflow'
  else {
    this.queueControl.unshift(element)
    return this.queueControl
  }
}

QueueDataStructure.prototype.dequeue = function() {
  if (this.queueControl.length === 0 )
    return 'Queue Underflow'
  else
    return this.queueControl.pop()
}