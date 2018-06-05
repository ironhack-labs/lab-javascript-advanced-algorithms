function QueueDataStructure () {
    //FIFO Structure
    this.MAX_SIZE = 5;
    this.queueControl = [];
}

QueueDataStructure.prototype.enqueue = function(element){
  if (this.canEnqueue())
  {
    this.queueControl.push(element);
    return this.queueControl;
  }
  else
  {
    console.log('could not add ' + element);
    return 'Queue Overflow';
  }
}
QueueDataStructure.prototype.dequeue = function(){
  if (this.isEmpty())
  {
    return 'Queue Underflow';
  }
  else
  {
    var element = this.queueControl.splice(0,1);
    return element;
  } 
}
QueueDataStructure.prototype.canEnqueue = function(){
  if(this.queueControl.length === this.MAX_SIZE) return false;
  else return true;
}
QueueDataStructure.prototype.isEmpty = function(){
  if(this.queueControl.length === 0) return true;
  else return false;
}