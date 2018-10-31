function QueueDataStructure () {
  
  this.queueControl = [];
  this.MAX_SIZE = 10;


}

QueueDataStructure.prototype.isEmpty = function(){
  if (this.queueControl.length === 0){
    return true;
  }else{
    return false;
  }
}

QueueDataStructure.prototype.canEnqueue = function(){
  if (this.queueControl.length === this.MAX_SIZE){    
    return false;
  }else{
    return true;
  }

}
QueueDataStructure.prototype.enqueue = function(newItem){

  if (this.queueControl.length === this.MAX_SIZE){
    return 'Queue Overflow';
  }else{

    this.queueControl.unshift(newItem);
    return this.queueControl;
  }
     
  
}

QueueDataStructure.prototype.dequeue = function(){
  
  if(this.queueControl.length === 0){
    return 'Queue Underflow';
  }else{
    return this.queueControl[this.queueControl.length - 1];

  }
  
}