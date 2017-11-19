function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 80;
}

QueueDataStructure.prototype.isEmpty = function() {
  if (this.queueControl.length === 0) {
    return true;
  } else {
    return false;
  }
}

QueueDataStructure.prototype.canEnqueue = function() {
  if (this.queueControl.length === this.MAX_SIZE) {
    return false
  } else {
    return true
  }
}

QueueDataStructure.prototype.enqueue = function(element) {
  if (this.canEnqueue() === true) {
    this.queueControl.unshift(element);
    return this.queueControl
  } else {
    return "Queue Overflow"
  }
}

QueueDataStructure.prototype.dequeue = function(element) {
  if (this.isEmpty() === true) {
    return "Queue Underflow"
  } else {
    return this.queueControl.pop(element);
  }
}
