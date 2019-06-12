var queue = new QueueDataStructure();

function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 8;

  this.isEmpty = function() {
    return this.queueControl.length === 0;
  };

  this.canEnqueue = function() {
    return this.queueControl.length < this.MAX_SIZE;
  };

  this.enqueue = function(elemQueue) {
    if (this.canEnqueue()) {
    this.queueControl.unshift(elemQueue);
    return this.queueControl;
    }
    else {
      return "Queue Overflow";
    }
  };

  this.dequeue = function(elemQueue) {
    if (!this.isEmpty()) {
      return this.queueControl.pop(elemQueue);
    } 
    else {
      return "Queue Underflow";
    }
  };
}