function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function(){
   return true;
};

QueueDataStructure.prototype.canEnqueue = function(){
  return true;
};

QueueDataStructure.prototype.enqueue = function(a){
return this.queueControl.push(a);
};

QueueDataStructure.prototype.dequeue = function(){

};
