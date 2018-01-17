function QueueDataStructure () {

  this.queueControl=[];
  this.MAX_SIZE = 8;

}

QueueDataStructure.prototype.isEmpty = function(){

  return (this.queueControl.length == 0);

}

QueueDataStructure.prototype.canEnqueue = function(){

  return (this.queueControl.length < this.MAX_SIZE);
}

QueueDataStructure.prototype.enqueue = function(elemento){
  
  if(this.canEnqueue()){
   
    this.queueControl.unshift(elemento);
    return this.queueControl;

  }else{

    return 'Queue Overflow';

  }


}

QueueDataStructure.prototype.dequeue = function(){

  if(this.isEmpty()){
    return 'Queue Underflow';
  }else{
    return this.queueControl[this.queueControl.length - 1];
  }
}