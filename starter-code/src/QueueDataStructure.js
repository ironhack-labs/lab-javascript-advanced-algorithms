function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 8;
}

var queue = this.queueControl

QueueDataStructure.prototype.isEmpty = function() {
  if(this.queueControl.length == 0){
    return true;
  } else {
    return false;
  }
}

QueueDataStructure.prototype.canEnqueue = function() {
  if(this.queueControl.length < this.MAX_SIZE){
    return true;
  } else {
    return false;
  }
}

QueueDataStructure.prototype.enqueue = function(item) {
  if(this.canEnqueue()){
    this.queueControl.unshift(item); // adds one or more elements to the beginning of an array
    return this.queueControl;
  } else {
    return 'Queue Overflow';
  }
}

QueueDataStructure.prototype.dequeue = function() {
    if(this.isEmpty()){
      return 'Queue Underflow';
    } else{
      return this.queueControl.pop();
    }
}
