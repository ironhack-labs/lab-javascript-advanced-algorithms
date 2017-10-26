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
  if (this.canEnqueue()) {
  this.queueControl.push(e);
  // this.queueControl.reverse(); <-- I will use shift to add an element insteed of pop,
  //that's why I won't put the reverse.
    return this.queueControl;
  } else {
    return "Queue Overflow";
  }
};

//this method allow us to dequeue from the queue
QueueDataStructure.prototype.dequeue = function() {
     if (this.isEmpty()) {
     return 'Queue Underflow';
   } else {
     this.queueControl.shift();
     return this.queueControl[0];
   }
};
