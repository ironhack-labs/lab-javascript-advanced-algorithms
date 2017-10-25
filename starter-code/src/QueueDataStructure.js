var queue;


function QueueDataStructure () {
this.queueControl=[];
this.MAX_SIZE= 9;
}

QueueDataStructure.prototype.isEmpty = function(){
 return this.queueControl.length === 0;
};

QueueDataStructure.prototype.canEnqueue = function(){
  return this.queueControl.length < this.MAX_SIZE;
};

QueueDataStructure.prototype.enqueue = function(a){
  this.queueControl.unshift(a);
  return this.queueControl.length < this.MAX_SIZE;
};

QueueDataStructure.prototype.dequeue = function(){
  return Underflow;
 };
