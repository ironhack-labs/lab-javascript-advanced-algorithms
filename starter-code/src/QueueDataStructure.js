function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 8;
}

QueueDataStructure.prototype.isEmpty = function() {
  if (this.queueControl.length == 0) {
    return true 
  } else
  return false
}

QueueDataStructure.prototype.canEnqueue = function() {
  if (this.queueControl.length < this.MAX_SIZE) {
    return true
  } else {
    return false
}
}

QueueDataStructure.prototype.enqueue = function(element) {
  if (this.canEnqueue() == false) {
    return "Queue Overflow";
  } else {
  this.queueControl.unshift(element);
  this.isEmpty;
  return this.queueControl;
}
}

QueueDataStructure.prototype.dequeue = function() {
  var first = this.queueControl.pop(); 
  if (this.isEmpty() == true) {
    return "Queue Underflow"
  } else {
    return first;
  }
}
