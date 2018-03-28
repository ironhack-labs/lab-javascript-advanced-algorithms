function QueueDataStructure () {

  this.queueControl = [];
  this.MAX_SIZE = 10;
  
}

QueueDataStructure.prototype.isEmpty = function() {
  return (this.queueControl.length == 0)
}

QueueDataStructure.prototype.canEnqueue = function() {
    return (this.queueControl.length < this.MAX_SIZE  )
}

QueueDataStructure.prototype.enqueue = function(i) {
    this.queueControl.unshift(i);
    return this.queueControl;
    
}

QueueDataStructure.prototype.dequeue = function() {
    
}


