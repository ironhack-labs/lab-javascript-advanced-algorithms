
function QueueDataStructure () {

  this.queueControl = [];
  
  this.MAX_SIZE = 19;
  
  }
  
  QueueDataStructure.prototype.isEmpty = function () {
  
  return this.queueControl.length == 0;
  
  }
  
  QueueDataStructure.prototype.canEnqueue = function () {
  
  return this.queueControl.length < this.MAX_SIZE;
  
  }
  
  QueueDataStructure.prototype.enqueue = function (element) {
  
  if ( this.canEnqueue() == false ) return  'Queue Overflow';

  if (element !== " ") {this.queueControl.unshift(element); }
  
  return this.queueControl;

  }
  
  QueueDataStructure.prototype.dequeue = function () {
  
  return this.isEmpty() == true ? "Queue Underflow" : this.queueControl.pop();  

  }