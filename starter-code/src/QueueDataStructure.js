function QueueDataStructure () {
  this.queueControl = [],
  this.MAX_SIZE = 8
}

QueueDataStructure.prototype.isEmpty = function (){
  if (this.queueControl.length == 0){
    return true;
  } else {return false};
};



QueueDataStructure.prototype.canEnqueue = function () {
  return (this.queueControl.length < this.MAX_SIZE)
}

QueueDataStructure.prototype.enqueue = function (a) {
  if (this.canEnqueue()){
    this.queueControl.unshift(a);
    return this.queueControl;
  } else {
    return 'Queue Overflow';
  }
  }

  QueueDataStructure.prototype.dequeue = function (popedElement) {
    if (this.isEmpty()){
      return 'Queue Underflow';
    } else {
      return this.queueControl.pop();
    }
    }