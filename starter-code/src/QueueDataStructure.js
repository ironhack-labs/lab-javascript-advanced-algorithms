function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 5;
}

QueueDataStructure.prototype.isEmpty = function(){
  if(this.queueControl.length == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

QueueDataStructure.prototype.canEnqueue = function(){
  if(this.queueControl.length < this.MAX_SIZE -1)
  {
    return true;
  }
  else
  {
    return false;
  }
}

QueueDataStructure.prototype.enqueue =  function(element){
  if(this.canEnqueue()){
    this.queueControl.splice(0, 0, element);
    return this.queueControl;
  }
  else{
    return "Queue Overflow";
  }
}

QueueDataStructure.prototype.dequeue = function(){
  let value = this.isEmpty();
  if(!value)
  {
    return this.queueControl.pop();
  }
  else
  {
    return 'Queue Underflow';
  }
}

