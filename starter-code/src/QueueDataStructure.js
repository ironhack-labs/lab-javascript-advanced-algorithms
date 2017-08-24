function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 1;
}

var queue = new QueueDataStructure();

QueueDataStructure.prototype.isEmpty = function (){
  return (this.queueControl.length > 0) ? false : true;
};

QueueDataStructure.prototype.canEnqueue = function(){
  return this.queueControl.length < this.MAX_SIZE ? true: false;
};

QueueDataStructure.prototype.enqueue = function(x){
this.queueControl.unshift(x);
return this.queueControl.length>this.MAX_SIZE ? "Queue Overflow": this.queueControl;
};

QueueDataStructure.prototype.dequeue = function(){
return this.queueControl[this.queueControl.length-1] === undefined? "Queue Underflow": this.queueControl[this.queueControl.length-1];
};
