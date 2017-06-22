function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 1;
}
QueueDataStructure.prototype.isEmpty = function() {
  if (this.queueControl[0] == undefined) {
    return true;
  } else {
    return false;
  }
};
QueueDataStructure.prototype.canEnqueue = function() {
  this.queueControl.push(1);
  if (this.queueControl[0] == 1) {
    return true;
  } else {
    return false;
  }
  this.queueControl.pop(1);
};

QueueDataStructure.prototype.enqueue = function(n) {
  this.MAX_SIZE++;
  this.queueControl.push(n);
  if (this.MAX_SIZE == 3) {
    this.queueControl.reverse();
    return 'Queue Overflow';
  }
  return this.queueControl;


};
QueueDataStructure.prototype.dequeue = function() {

  if (this.queueControl[0] == undefined) {

    return 'Queue Underflow'
  }
  return this.queueControl.pop();


}
