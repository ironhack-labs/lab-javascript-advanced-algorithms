function QueueDataStructure () {
  this.queueControl=[];
  this.MAX_SIZE=8;
}

QueueDataStructure.prototype.canEnqueue = function (){
  if (this.queueControl.length < this.MAX_SIZE){
    return true;
  }
  else {
    return false;
  }
};

//Eliminar elementos de la pila

QueueDataStructure.prototype.isEmpty = function (){
  if (this.queueControl.length === 0){
    return true;
  }
  else {
    return false;
  }
};

QueueDataStructure.prototype.enqueue = function(a){
  var answer;
  if(this.canEnqueue() === true){
    this.queueControl.unshift(a);
    answer = this.queueControl;
  } else {
    answer = 'Queue Overflow';
  }
  return answer;
};

QueueDataStructure.prototype.dequeue = function(){
  var answer;
  if(this.isEmpty() === true){
    answer = 'Queue Underflow';
  } else {
    answer= this.queueControl.pop();
  }
  return answer;
};
