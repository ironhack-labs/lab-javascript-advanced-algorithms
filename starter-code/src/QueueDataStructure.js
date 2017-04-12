function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 13;
}

QueueDataStructure.prototype.isEmpty = function(){
  return this.queueControl.length === 0;
};

QueueDataStructure.prototype.canEnqueue = function(){
  return this.queueControl.length < this.MAX_SIZE;
};

QueueDataStructure.prototype.enqueue = function(arg){
  if(this.queueControl.length === this.MAX_SIZE){
    return "Queue Overflow";
  } else {
    this.queueControl.push(arg);
    var aux = this.queueControl[0];
    var lastIndex = this.queueControl.length - 1;
    for (var i=0; i<lastIndex; i++){
      this.queueControl[i]=this.queueControl[i+1];
    }
    this.queueControl[lastIndex] = aux;
    return this.queueControl;
  }
};

QueueDataStructure.prototype.dequeue = function(){
  if(this.queueControl.length===0){
    return 'Queue Underflow';
  } else {
    return this.queueControl.pop();
  }
};
