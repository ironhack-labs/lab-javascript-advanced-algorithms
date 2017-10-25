function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 9;
}

QueueDataStructure.prototype.isEmpty = function() {
  return this.queueControl.length === 0 ? true : false;
};
QueueDataStructure.prototype.canEnqueue = function() {
  return this.queueControl.length <  this.MAX_SIZE ? true : false;
};
QueueDataStructure.prototype.enqueue = function(element) {
  if(this.canEnqueue()) {
    this.queueControl.unshift(element);
    return this.queueControl;
  } else {
    return 'Queue Overflow';
  }
};
QueueDataStructure.prototype.dequeue = function(element) {

};
