function QueueDataStructure () {
  this.queueControl = []
  this.MAX_SIZE = 10
}

QueueDataStructure.prototype.enqueue = function(item) {
  this.queue.unshift(item)
}


QueueDataStructure.prototype.dequeue = function() {
  this.queue.pop()
}
