//$(document).ready(function(){

function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function() {
  if (this.queueControl.length === 0){
    return true;
  }
  else {
    return false;
  }
}

QueueDataStructure.prototype.canEnqueue = function() {
  if (this.queueControl.length !== this.MAX_SIZE){
    return true;
  }
  else {
    return false;
  }
}

 QueueDataStructure.prototype.enqueue = function(element) {
  if(this.canEnqueue()){
    this.queueControl.unshift(element);
    return this.queueControl;
  }
  else {
    return "Queue Overflow";
  }
 }

 QueueDataStructure.prototype.dequeue = function(element) {
  if(!this.isEmpty()){
    var firstAddition = this.queueControl.length-1
    return this.queueControl[firstAddition];
  }
  else {
    return "Queue Underflow";
  }
 }
 //});