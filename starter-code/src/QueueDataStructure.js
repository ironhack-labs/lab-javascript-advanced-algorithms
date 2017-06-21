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
  var response;
  if(this.canEnqueue()){
    this.queueControl.unshift(element);
    response = this.queueControl;
  } else {
    response = "Queue Overflow";
  }
  return response;
};

QueueDataStructure.prototype.dequeue = function() {
  var response;
  if(this.isEmpty()){
    response = 'Queue Underflow';
  } else {
    response = this.queueControl.pop();
  }
  return response;
};
