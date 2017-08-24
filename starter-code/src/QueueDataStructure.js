function QueueDataStructure () {
this.queueControl=[];
this.MAX_SIZE= 9;
}

QueueDataStructure.prototype.isEmpty = function(){
  return this.queueControl.length === 0 ? true: false;
};
QueueDataStructure.prototype.canEnqueue = function(){

  return   this.queueControl.length<this.MAX_SIZE ?  true : false;
};
QueueDataStructure.prototype.enqueue = function(a){
  this.queueControl.unshift(a);

  return this.queueControl.length < this.MAX_SIZE ? this.queueControl: "Queue Overflow";
};
QueueDataStructure.prototype.dequeue = function(){
  return 'Queue Underflow'
};
