function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;
}
QueueDataStructure.prototype.isEmpty = function(){
   if(this.queueControl.length <= 0){
    return true;
  }else{
    return false;
  }
};
QueueDataStructure.prototype.canEnqueue = function (x){
  if (this.queueControl.length < this.MAX_SIZE){
   return true;
  }
  return false;
};
QueueDataStructure.prototype.enqueue = function(x){

  if(this.canEnqueue()){
    this.queueControl.push(x);
    this.queueControl.reverse(x);
    return this.queueControl;
  }else{
    return "Queue Overflow";
  }
};
QueueDataStructure.prototype.dequeue = function(x){
if(this.isEmpty()){
  return 'Queue Underflow';
}else{
  this.queueControl.reverse(x);
  return this.queueControl.shift();
}
};
