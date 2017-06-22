function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function(){
  return !this.queueControl.length;
}

QueueDataStructure.prototype.canEnqueue = function(){
  return this.queueControl.length < this.MAX_SIZE;
}

QueueDataStructure.prototype.enqueue = function(i){
  if(this.canEnqueue()){
    this.queueControl.unshift(i);
    return this.queueControl;
  }else{
    return "Queue Overflow";
  }
}

QueueDataStructure.prototype.dequeue = function(){
  return this.isEmpty() ? "Queue Underflow" : this.queueControl.pop();
}
