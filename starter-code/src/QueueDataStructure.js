function QueueDataStructure () {

  // Queue properties
  this.queueControl = [];
  this.MAX_SIZE = 10;

}

/////// Stack methods//////////

// Returns true/false if stack is empty/not empty
QueueDataStructure.prototype.isEmpty = function() {
  return this.queueControl.length == 0 ? true : false;
}

// Returns true if stack size is strictly less than stack size
QueueDataStructure.prototype.canEnqueue = function() {
  return this.queueControl.length < this.MAX_SIZE ? true : false;
}

// If stack is not full, pushes object argument to top of the stack
QueueDataStructure.prototype.enqueue = function(obj) {
  if (this.canEnqueue()) {
    this.queueControl.unshift(obj);
    return this.queueControl;
  } else {
    return 'Queue Overflow';
  }
}

// If stack is not empty, pops object at the top of the stack and returns it
QueueDataStructure.prototype.dequeue = function() {
  if ( !this.isEmpty() ) {
    return this.queueControl.pop();
  } else {
    return 'Queue Underflow';
  }

}
