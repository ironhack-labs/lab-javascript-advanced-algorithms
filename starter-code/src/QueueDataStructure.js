function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function(){
  return this.queueControl.length == 0
}

QueueDataStructure.prototype.canEnqueue = function(){
  return this.queueControl.length < this.MAX_SIZE;
}

QueueDataStructure.prototype.enqueue = function(item){
  if(this.canEnqueue()){
    this.queueControl.push(item);
    return this.queueControl.reverse();
  }else{
    return "Queue Overflow";
  }
}

QueueDataStructure.prototype.dequeue = function(){
  if(!this.isEmpty()){
    return this.queueControl.pop();
  }else{
    return 'Queue Underflow';
  }
}