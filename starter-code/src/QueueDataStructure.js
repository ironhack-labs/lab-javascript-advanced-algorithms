function QueueDataStructure () {
 this.queueControl = [];
 this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function () {
  if (this.queueControl.length == 0) {
    return true;
  } else {
    return false
  }
}

QueueDataStructure.prototype.canEnqueue = function () {
  if (this.queueControl.length >= this.MAX_SIZE) {
    return false;
  } else {
    return true;
  }
}

QueueDataStructure.prototype.dequeue = function (element) {

  if (this.isEmpty() == false) {
    return this.queueControl.shift();
 
  } else {
    return "Queue Underflow";
  }
}

QueueDataStructure.prototype.enqueue = function (element) {
  if (this.canEnqueue() == true) {
    this.queueControl.push(element);
    return this.queueControl;
  } else {
    return "Queue Overflow"
  }
}