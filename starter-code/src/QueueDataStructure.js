function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 8;
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
  }else{
    return false;
  }
};
QueueDataStructure.prototype.enqueue = function(e){
  this.queueControl.enqueue(e);
  if(this.queueControl.length > this.MAX_SIZE){
    return "Stack Underflow";
  }if(this.stackControl.length == 0){
    return true;
  }
};

QueueDataStructure.prototype.dequeue = function(){
  if(this.queueControl.length == 0){
    return "Queue Underflow";
  }else{
  }
};

// QueueDataStructure.prototype.pop = function(){
//   if(this.QueueDataStructure.length == 0){
//     return "Queue Underflow";
//   }else{
//   }
//   return this.QueueDataStructure.pop();
// };
