function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 9;
}

QueueDataStructure.prototype.isEmpty = function(){
  return this.queueControl.length === 0;
}

QueueDataStructure.prototype.canEnqueue = function(){
  return this.queueControl.length < this.MAX_SIZE;
}

QueueDataStructure.prototype.enqueue = function(item){
  if (this.canEnqueue()) {
    this.queueControl.unshift(item);
    return this.queueControl;
  } else {
    return 'Queue Overflow';
  }
}

QueueDataStructure.prototype.dequeue = function(){
  if (this.isEmpty()) {
    return 'Queue Underflow';
  } else {
    //this.queueControl.shift();
    //return this.queueControl[0];
    //return this.queueControl.splice(-1,1)[0];
    return this.queueControl.pop();
  }
}
