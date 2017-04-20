function QueueDataStructure () {
  this.MAX_SIZE=10;
  this.queueControl = [];
  return this;  
}
QueueDataStructure.prototype.isEmpty = function () {
  return this.queueControl.length===0?true:false;
}
QueueDataStructure.prototype.canEnqueue = function () {
  return this.queueControl.length<this.MAX_SIZE?true:false;
}

QueueDataStructure.prototype.enqueue = function (element) {
  if( this.canEnqueue() ) { this.queueControl.unshift(element); return this.queueControl;}
  else { return  "Queue Overflow"}
}
QueueDataStructure.prototype.dequeue = function (element) {
  return this.isEmpty() ? 'Queue Underflow' : this.queueControl.pop();
}
