function QueueDataStructure () {

  this.queueControl = [];
  this.MAX_SIZE = 8;
}

QueueDataStructure.prototype.enqueue = function(elem) {

  if (this.canEnqueue()){
    this.queueControl.unshift(elem);
    return this.queueControl;
  }
    return "Queue Overflow";
}

QueueDataStructure.prototype.isEmpty = function() {
if (this.queueControl.length == 0){
  return true;
} 
return false;
};

QueueDataStructure.prototype.canEnqueue = function() {
  if (this.MAX_SIZE < 8){
    return false;
  } return true;
};


QueueDataStructure.prototype.dequeue = function() {
  if (this.isEmpty() == true) {
    return "Queue Underflow";
  }
   return this.queueControl.pop();
  };


