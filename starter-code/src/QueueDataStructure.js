function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 2;
}

QueueDataStructure.prototype.isEmpty = function() {
  return this.queueControl.length == 0;
}

QueueDataStructure.prototype.canEnqueue = function() {
  return this.queueControl.length < this.MAX_SIZE;
}
QueueDataStructure.prototype.enqueue = function(num) {
  if (this.canEnqueue()){
    this.queueControl.unshift(num);
  } else {
    return "Queue Overflow"
  }

  return this.queueControl;
}

QueueDataStructure.prototype.dequeue = function() {
  if (this.isEmpty()){
    return 'Queue Underflow';
  }
  return this.queueControl.pop();
}
