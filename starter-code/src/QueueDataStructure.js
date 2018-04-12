function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 9;

this.isEmpty = function(){
  return this.queueControl.length === 0 ;
};

this.canEnqueue = function(){
  return this.queueControl.length + 1 < this.MAX_SIZE;
}

this.enqueue = function (value){
  if(this.canEnqueue()){
    this.queueControl.push(value);
    return this.queueControl.reverse();
  }
  return 'Queue Overflow'
}

this.dequeue = function (){
  if (this.queueControl.length >= 1){
    return this.queueControl.pop();
  }
  return 'Queue Underflow'
  }

 
}
  


  