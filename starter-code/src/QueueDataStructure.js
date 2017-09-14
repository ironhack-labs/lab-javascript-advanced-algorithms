function QueueDataStructure () {

this.queueControl = [];

this.MAX_SIZE = 1;

this.isEmpty = function(){
  if(this.queueControl.length === 0){
    return true;
  } else {
    return false;
  }
};

this.canEnqueue = function(){
  if(this.queueControl < this.MAX_SIZE){
    return true;
  } else {
  return false;
  }
};

this.enqueue = function(x){
  this.queueControl.unshift(x);
  if(this.queueControl.length>this.MAX_SIZE){
    return "Queue Overflow";
  }
  return this.queueControl;
};



this.dequeue = function(){
  if(this.queueControl.length === 0){
    return "Queue Underflow";
  } else {
  return this.queueControl.pop();
  }
};






}
