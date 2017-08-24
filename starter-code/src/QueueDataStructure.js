function QueueDataStructure () {
  this.queueControl=[];
  this.MAX_SIZE=5;
}

QueueDataStructure.prototype.isEmpty= function(){
  return (this.queueControl.length === 0) ? true : false;
};

QueueDataStructure.prototype.canEnqueue = function() {
return (this.queueControl.length === this.MAX_SIZE) ? false : true;
};

QueueDataStructure.prototype.enqueue = function(a) {
if(this.canEnqueue()){
  this.queueControl.unshitf(a);
  return this.queueControl;
}else{
  return "Queue Overflow";
}
};


QueueDataStructure.prototype.dequeue = function (){
  if(this.isEmpty()) {
    return "Queue Underflow";
  } else {
    return this.queueControl.pop();
  }
};
