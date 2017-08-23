function QueueDataStructure () {

  this.queueControl = [];
  this.MAX_SIZE = 8;

}


QueueDataStructure.prototype.isEmpty = function(){

  return this.queueControl.length > 0 ? false : true;

};


QueueDataStructure.prototype.canEnqueue = function(){
  return this.queueControl.length == this.MAX_SIZE ? false : true;
};


QueueDataStructure.prototype.enqueue = function(a){
  var result = 0;
  if(this.queueControl.length < this.MAX_SIZE){
    this.queueControl.unshift(a);
    result = this.queueControl;
  }else{
    result = 'Queue Overflow';
  }
  return result;
};


QueueDataStructure.prototype.dequeue = function(){
  return this.queueControl.length === 0 ? 'Queue Underflow' : this.queueControl.pop();

};
