function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 0;
}

// Eval if the queue is empty
QueueDataStructure.prototype.isEmpty = function() {
  return this.queueControl.length == 0 ? true : false;
};

// Eval if it can add new item in the queue
QueueDataStructure.prototype.canEnqueue = function() {
  return this.queueControl.length < this.MAX_SIZE ? false : true;
};

// Add a new element in the queue
QueueDataStructure.prototype.enqueue = function(element) {
  var msg = "Queue Overflow";

  if (this.canEnqueue()) {
    this.queueControl.push(element);
    return this.queueControl.reverse();
  } else {
    return msg;
  }
};

// Remove a element in the queue
QueueDataStructure.prototype.dequeue = function() {
  var msg = "Queue Underflow";
  return this.isEmpty() ? msg :this.queueControl.pop();
};
