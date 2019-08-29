function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 8;

  this.isEmpty = function() {
    return this.queueControl.length == 0;
  };

  this.canEnqueue = function() {
    return this.queueControl.length < this.MAX_SIZE;
  };

  this.enqueue = function(arg) {
    if (this.canEnqueue()) {
        this.queueControl.unshift(arg);
        return this.queueControl;
      } else {
        return "Queue Overflow";
      }
  };

  this.dequeue = function() {
      if (!this.isEmpty()) {
        let lastInQueue = this.queueControl.length-1;
        return this.queueControl.pop(lastInQueue);
      } else {
        return "Queue Underflow";
      }
  }
}
