function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function() {
  var response;
  if(this.queueControl.length === 0){
    response = true;
  } else {
    response = false;
  }
  return response;
};

QueueDataStructure.prototype.canEnqueue = function() {
  var response;
  if(this.queueControl.length < this.MAX_SIZE){
    response = true;
  } else {
    response = false;
  }
  return response;
};

QueueDataStructure.prototype.enqueue = function(element) {
  var response,
      canEnqueue = this.canEnqueue();
  if(canEnqueue){
    this.queueControl.unshift(element);
    response = this.queueControl;
  } else {
    response = "Queue Overflow";
  }
  return response;
};

QueueDataStructure.prototype.dequeue = function() {
  var response;
  if(this.queueControl.length !== 0){
    response = this.queueControl.pop();
  } else {
    response = 'Queue Underflow';
  }
  return response;
};
