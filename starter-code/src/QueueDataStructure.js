//2nd Iteration

//Queues
function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 8;
};

//this method check if the queue is empty
QueueDataStructure.prototype.isEmpty = function() {
  return this.queueControl.length == 0;
};

//this method check if we can add a new element in the queue
QueueDataStructure.prototype.canEnqueue = function() {
  return this.queueControl.length < this.MAX_SIZE;
};

//this method allow us to enqueue elements into the queue
QueueDataStructure.prototype.enqueue = function(e) {
this.queueControl.push(e)
  if (this.canEnqueue()) {
    return this.queueControl;
  } else {
    return "Queue Overflow";
  }
};


QueueDataStructure.prototype.dequeue = function(e) {
     if (this.isEmpty()) {
     return 'Queue Underflow';
   } else {
     return this.queueControl.shift(e);
   }
};
