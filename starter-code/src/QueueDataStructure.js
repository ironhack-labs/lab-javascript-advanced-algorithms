//////////Queue

function QueueDataStructure () {
  this.queueControl=[];
  this.MAX_SIZE=10;
}

QueueDataStructure.prototype.isEmpty = function(){
  if(this.queueControl.length === 0)
    return true;
  return false;
}

QueueDataStructure.prototype.canEnqueue = function(){
  if(this.queueControl.length < this.MAX_SIZE)
    return true;
  return false;
}

QueueDataStructure.prototype.enqueue = function(elemento){
  if(this.canEnqueue()){
    this.queueControl.unshift(elemento);
    return this.queueControl;
  }
  return "Queue Overflow";
}

QueueDataStructure.prototype.dequeue = function(){
  if(this.queueControl.length<=0)
    return "Queue Underflow";
  lastElement=this.queueControl[this.queueControl.length-1];
  this.queueControl.splice(this.queueControl.length-1,1);
  return lastElement;
}

QueueDataStructure.prototype.clear = function(){
  while(!this.isEmpty())
    this.dequeue();
}
