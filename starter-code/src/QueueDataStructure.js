function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function(){
   return (this.queueControl.length > 0) ?  false : true;
};

QueueDataStructure.prototype.canEnqueue = function(){
  return (this.queueControl.length == this.MAX_SIZE) ? false : true;
};

QueueDataStructure.prototype.enqueue = function(a){
if (this.queueControl.length < this.MAX_SIZE){
 this.queueControl.unshift(a);
 return this.queueControl;
 }else{
   return "Queue Overflow";
 }
};

QueueDataStructure.prototype.dequeue = function(){
  if (this.queueControl.length === 0) {
    return "Queue Underflow";
  } else {
    return this.queueControl.pop();
  }
};
