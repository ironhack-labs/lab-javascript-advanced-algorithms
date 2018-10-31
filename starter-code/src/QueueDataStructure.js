function QueueDataStructure () {
  this.MAX_SIZE= 8;
  this.queueControl=[];
  
}

QueueDataStructure.prototype.isEmpty= function(){
  return this.queueControl.length===0;
}

QueueDataStructure.prototype.canEnqueue = function(){
  return this.queueControl.length!==this.MAX_SIZE;
}

QueueDataStructure.prototype.enqueue= function(elt){
  if (this.canEnqueue()){
    this.queueControl.unshift(elt);
    return this.queueControl;
  }
  else{
    return "Queue Overflow";
}
}

QueueDataStructure.prototype.dequeue = function(){
  return (this.isEmpty()?`Queue Underflow`:this.queueControl.pop());
}
