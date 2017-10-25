function QueueDataStructure () {
  this.queueControl =[];
  this.MAX_SIZE= 10;
}

QueueDataStructure.prototype.isEmpty = function(){
  if(this.queueControl.length == 0){
    return true;
  }else{
    return false;
  }

};

QueueDataStructure.prototype.canEnqueue = function(){
  if(this.queueControl.length < this.MAX_SIZE){
    return true;
  }
  else{
    return false;
  }
};

QueueDataStructure.prototype.enqueue = function(x){
  if(this.queueControl.length >= this.MAX_SIZE){
    return "Queue Overflow";}
  this.queueControl.unshift(x);
  return this.queueControl;
};

QueueDataStructure.prototype.dequeue = function(){
  if(this.queueControl.length == 0){
    return "Queue Underflow";}
  var number = this.queueControl[this.queueControl.length-1];
  this.queueControl.pop();
  return number;
};
