var QueueDataStructure = function () {
  this.MAX_SIZE = 4;
  this.queueControl = [];
  
}


QueueDataStructure.prototype.enqueue = function (element) {
  
  if (this.queueControl.length < this.MAX_SIZE) {
    this.queueControl.push(element);
    return this.queueControl;
  }
  else return "Queue Overflow";

}

QueueDataStructure.prototype.isEmpty = function() {
  if (this.queueControl.length == 0) return true;
  return false;
}

QueueDataStructure.prototype.canEnqueue = function() {
  if (this.queueControl.length < this.MAX_SIZE) return true;
  else return false;
}

QueueDataStructure.prototype.dequeue = function() {
  if (!(QueueDataStructure.prototype.isEmpty)){
    return this.queueControl.shift();
  }
  else return 'Queue Underflow';
}
