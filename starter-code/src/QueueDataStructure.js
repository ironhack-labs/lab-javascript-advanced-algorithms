function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 8;
}

var queue = new QueueDataStructure();

QueueDataStructure.prototype.isEmpty = function(){
  return this.queueControl.length === 0 ? true : false;
  // if(this.queueControl.length === 0){
  //   return true;
  // }else{
  //   return false;
  // }
};

QueueDataStructure.prototype.canEnqueue = function(){
  return this.queueControl.length<this.MAX_SIZE ? true : false;
  // if(this.queueControl.length<this.MAX_SIZE){
  //   return true;
  // }else{
  //   return false;
  // }
};

QueueDataStructure.prototype.enqueue = function(itemsToPush){
  if(this.canEnqueue()){
    this.queueControl.unshift(itemsToPush);
    return this.queueControl;
  }else{
    return 'Queue Overflow';
  }
};

QueueDataStructure.prototype.dequeue = function() {
  return this.isEmpty() ? 'Queue Underflow' : this.queueControl.pop();
  // if(this.isEmpty()){
  //   return 'Queue Underflow'
  // }else{
  //   this.queueControl.pop();
  // }
};
