function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;
  this.isEmpty;
  this.canPush;
  this.push;
  this.pop;
}

var queue = new QueueDataStructure;

QueueDataStructure.prototype.isEmpty = function(){
  return this.queueControl.length < 1 ? true : false;
};

QueueDataStructure.prototype.canEnqueue = function(){
  if (this.MAX_SIZE > this.queueControl.length){
    return true;
  } else {
    return false;
  }

};

QueueDataStructure.prototype.enqueue = function(elem){
  if (this.MAX_SIZE > this.queueControl.length){
    this.queueControl.unshift(elem);
    return this.queueControl;
  } else {
    return ("Queue Overflow");
  }
};

QueueDataStructure.prototype.dequeue = function(elem){
  if (this.queueControl.length === 0){
    return "Queue Underflow";
  } else {
  return this.queueControl[this.queueControl.length-1];
  }
};

QueueDataStructure.prototype.pop = function(){
  if (this.queueControl.length === 0){
    return "Queue Underflow";
  } else {
  return this.queueControl[this.queueControl.length-1];
  }
};

function deleteQueue() {
  allFillQueue = document.getElementsByClassName('fill-queue');
  allFillQueue[0].className = "empty-queue"
  queue.queueControl.pop();
}

function addQueue() {
  allEmptyQueue = document.getElementsByClassName('empty-queue');
  allEmptyQueue[0].className = "fill-queue";
  queue.queueControl.push();
}
