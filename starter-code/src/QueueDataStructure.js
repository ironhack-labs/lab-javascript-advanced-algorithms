function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function(){
  if(this.queueControl.length > 0){
    return false;
  }
  return true;
}

QueueDataStructure.prototype.canEnqueue = function(){
  if(this.queueControl.length === this.MAX_SIZE){
    return false;
  }
  return true;
}

QueueDataStructure.prototype.enqueue = function(element){
  if(this.canEnqueue()){
    this.queueControl.push(element);
    return this.queueControl;
  } else {
    return "Queue Overflow";
  }
}

QueueDataStructure.prototype.dequeue = function(){
  if(!this.isEmpty()){
    return this.queueControl.shift()
  } else {
    return "Queue Underflow";
  }
}
