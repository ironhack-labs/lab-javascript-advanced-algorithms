function QueueDataStructure () {

  this.queueControl = [];
  this.MAX_SIZE = 10;
  }

  QueueDataStructure.prototype.isEmpty = function () {
  return this.queueControl.length > 0 ? false : true;
  };

  QueueDataStructure.prototype.canEnqueue = function () {
  return this.queueControl.length < this.MAX_SIZE ? true : false;
  };

  QueueDataStructure.prototype.enqueue = function (e) {
  console.log(this.queueControl.length);
  if(this.canEnqueue()){
    this.queueControl.unshift(e);
    return this.queueControl;
  } else {
    return 'Queue Overflow';
  }
  };

  QueueDataStructure.prototype.dequeue = function () {
  if(this.isEmpty()){
    return 'Queue Underflow';
  }  else {
    return this.queueControl.pop();
  }

}
