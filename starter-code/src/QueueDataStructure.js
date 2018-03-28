function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE =9;
}


QueueDataStructure.prototype.isEmpty = function() {
  if (this.queueControl.length == 0){
    return true;
  }
    return false;
}

QueueDataStructure.prototype.canEnqueue = function(element) {
  if (this.queueControl.length < this.MAX_SIZE ){
    this.enqueue(element);
    return true;
  }
  else {
    return false;
  }
}


QueueDataStructure.prototype.enqueue = function(element) {
  if (this.queueControl.length < this.MAX_SIZE){
    this.queueControl.unshift(element);
    return this.queueControl;
  }
  else {
    this.queueControl.unshift('Queue Overflow');
    return 'Queue Overflow';
  }
}

QueueDataStructure.prototype.dequeue = function() {
  if (this.queueControl.length > 1){
    return this.queueControl.pop();
  }
  else {
    return ('Queue Underflow');
  }
}
