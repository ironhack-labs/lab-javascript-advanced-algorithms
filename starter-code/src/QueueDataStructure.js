function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 9;
}

QueueDataStructure.prototype.isEmpty = function (){
  if (this.queueControl.length === 0) {
    return true;
  } else {
    return false;
  }
};

QueueDataStructure.prototype.canEnqueue = function() {
  if (this.queueControl.length >= this.MAX_SIZE) {
    return false;
  }

  return true;
};

QueueDataStructure.prototype.enqueue = function (item) {
  var test = this.canEnqueue();
  if(test === true) {
    this.queueControl.unshift(item);
    return this.queueControl;
  }
  else {
    return "Queue Overflow" ;
  }
};

QueueDataStructure.prototype.dequeue = function (stack) {
  if (this.isEmpty()) {
    return "Queue Underflow";
  } else {
    this.queueControl.shift(stack);
    return this.queueControl[0];
  }
};
