function QueueDataStructure () {

this.queueControl = [];
this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function(){
return this.queueControl.length === 0 ? true : false;
};

QueueDataStructure.prototype.canEnqueue = function () {
return this.queueControl.length < this.MAX_SIZE ? true : false;
};


QueueDataStructure.prototype.enqueue = function(item){
if (this.canEnqueue() ){
  this.queueControl.unshift(item);
  return this.queueControl;
} else {
  return 'Stack Overflow';
}
};

QueueDataStructure.prototype.dequeue = function(){
if (this.isEmpty()) {
return 'Queue Underflow';
} else {
return this.queueControl.pop();
}
};
