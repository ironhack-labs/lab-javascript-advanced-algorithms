function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 16;
}

QueueDataStructure.prototype.isEmpty = function () {
  if (this.queueControl.lenght = 0) {
    return true;
  } else {
    false
  }
}

QueueDataStructure.prototype.canEnqueue = function () {
  if (this.queueControl.length < this.MAX_SIZE) {
    return true;
  } else {
    return false;
  }
}

QueueDataStructure.prototype.enqueue = function () {
  if (this.queueControl.length > this.MAX_SIZE) {
    return 'Stack Overflow';
  } else {
    return this.queueControl;
  }
}

QueueDataStructure.prototype.dequeue = function () {
  if(this.queueControl.length == 0) {
    return "Queue underflow";
  } else {
    return this.queueControl.pop;
  }
}