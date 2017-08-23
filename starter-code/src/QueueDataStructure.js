function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE=10;
}

QueueDataStructure.prototype.isEmpty = function(){
  if(this.queueControl.length == 0){

   return true;
 }else{
   return false;
 }
};

QueueDataStructure.prototype.canEnqueue = function(){
  if(this.MAX_SIZE==this.queueControl.length){
    return false;
  }else{
    return true;
  }
};

QueueDataStructure.prototype.enqueue = function(value){
  if(this.MAX_SIZE==this.queueControl.length){
    return "Queue Overflow";
  }else{
  this.queueControl.unshift(value);
  }
  return this.queueControl;
};

QueueDataStructure.prototype.dequeue = function(value){
  if(this.queueControl.length==0){
    return "Queue Underflow";
  }
    return this.queueControl.pop(value);
};
