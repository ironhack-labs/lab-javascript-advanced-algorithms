function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 5;
}

// Should has a method to check if the current queue is empty
// Should has a method to check if we can enqueue an element into the queue
// Should has a method to enqueue elements into the queue
// Should has a method to dequeue from the queue
QueueDataStructure.prototype.isEmpty = function() {
  return this.queueControl.length === 0;
}
QueueDataStructure.prototype.canEnqueue = function() {
  return this.queueControl.length < this.MAX_SIZE;
}
QueueDataStructure.prototype.enqueue = function(e) {
  if (!this.canEnqueue()) {
    return "Queue Overflow";
  } else {
    this.queueControl.push(e);
    return this.queueControl.reverse();
  }
}
QueueDataStructure.prototype.dequeue = function() {
  if (this.isEmpty()) {
    return "Queue Underflow";
  } else {
    return this.queueControl.pop();
  }
}
