function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;
}

function queueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 20;
}

QueueDataStructure.prototype.isEmpty = function(){
  return (this.queueControl.length == 0);
}

QueueDataStructure.prototype.canEnqueue = function(){
  return (this.queueControl.length < this.MAX_SIZE);
}

QueueDataStructure.prototype.enqueue = function(element){
  if (!this.canEnqueue()) {
    return("Queue Overflow");
  } else {
    this.queueControl.unshift(element);
    var itemQueued = [this.queueControl[0]];
    return itemQueued;
  }
}

QueueDataStructure.prototype.dequeue = function(element){
  if (this.isEmpty()) {
    return("Queue Underflow");
  } else {
    var firstItem = this.queueControl.pop();
    return firstItem;
  }
}
