function QueueDataStructure () {
  this.queueControl= [];
  this.MAX_SIZE = 10;

this.isEmpty = function() {
    return this.queueControl.length == 0;
}
this.canEnqueue = function() {
  return this.MAX_SIZE > this.queueControl.length;
};
this.enqueue= function(element) {
  if (this.canEnqueue()) {
    this.queueControl.unshift(element);
    return this.queueControl;
  } return "Queue Overflow";
};
this.dequeue = function(element) {
  if (!this.isEmpty()){
  return this.queueControl.pop();
  } return "Queue Underflow";
}
}

