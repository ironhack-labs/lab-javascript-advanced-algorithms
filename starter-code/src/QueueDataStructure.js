//queue constructor function, declaring array and max size
function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;
}
//check if array empty
QueueDataStructure.prototype.isEmpty = function(){
  return this.queueControl.length === 0;
};
QueueDataStructure.prototype.canEnqueue = function(){
  return this.queueControl.length < this.MAX_SIZE;
};
QueueDataStructure.prototype.enqueue = function(number){
  if (this.canEnqueue()) {
    this.queueControl.unshift(number);
    return this.queueControl;
  }else {
    return "Queue Overflow";
  }
};
QueueDataStructure.prototype.dequeue = function(number){
  if (!this.isEmpty()) {
    return this.queueControl.pop(number);
  }else {
    return "Queue Underflow";
  }
};
