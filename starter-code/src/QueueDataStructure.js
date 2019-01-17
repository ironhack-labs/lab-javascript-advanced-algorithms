function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;
};

QueueDataStructure.prototype.isEmpty = function (){
  if (this.queueControl.length === 0) {
    return true;
  } else {
    return false;
  }
};
QueueDataStructure.prototype.canEnqueue = function () {
  if (this.queueControl.length < this.MAX_SIZE) {
    return true;
  } else { 
    return false;
  }
};
QueueDataStructure.prototype.enqueue = function (i){
  if (this.canEnqueue() === false) {
    return 'Queue Overflow'
  } else {
    this.queueControl.unshift(i);
    return this.queueControl;
  }
    
};
QueueDataStructure.prototype.dequeue = function (){
    if (this.isEmpty() === true) {
      return 'Queue Underflow'
    } else {
      return this.queueControl.pop();
    }
};
