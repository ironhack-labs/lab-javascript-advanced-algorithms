function QueueDataStructure () {
    this.queueControl =[];
    this.MAX_SIZE=1;
}

QueueDataStructure.prototype.isEmpty=function(){

  if (this.queueControl.length===0){
    return true;
  } else {
    return false;
  }
};
QueueDataStructure.prototype.canEnqueue=function(){
if (this.MAX_SIZE===this.queueControl.length){
  return false;
} else {
  this.dequeue();
  return true;
}
};

QueueDataStructure.prototype.enqueue=function(number){
  if  (this.canEnqueue()) {
    this.queueControl.push(number);
      return this.queueControl;
  }
    else {
      return "Queue Overflow";}


};

QueueDataStructure.prototype.dequeue=function() {
  if (this.isEmpty()) {
    return "Queue Underflow";
  }else {
    return this.queueControl;
  }
};
