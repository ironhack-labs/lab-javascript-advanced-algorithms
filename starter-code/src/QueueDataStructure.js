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
  allQueue = document.getElementsByClassName('fill-queue');
  allQueue[0].className = "empty-queue"
  queue.queueControl.pop();
}
