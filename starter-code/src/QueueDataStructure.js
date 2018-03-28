function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function() {
	if (this.queueControl.length == 0) {
		return true;
	} else {
		return false;
	}
};

QueueDataStructure.prototype.canEnqueue = function() {
	if (this.queueControl.length < this.MAX_SIZE) {
		return true;
  } else {
		return false;
  }
};
QueueDataStructure.prototype.enqueue = function(arg) {
  if (this.canEnqueue()){
    this.queueControl.unshift(arg);
    return this.queueControl;
    
  } 
    if(!this.canEnqueue()) {
    return 'Queue Overflow';
  }
  
};

QueueDataStructure.prototype.dequeue = function(arg) {
if(this.isEmpty()){
  return "Queue Underflow";
} else{
  return this.queueControl.pop(arg);
}
};



  
