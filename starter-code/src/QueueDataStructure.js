var QueueDataStructure = function() {
  this.MAX_SIZE = 8;
  this.queueControl = [];
  this.isEmpty = function() {
    return this.queueControl.length === 0;
  };

  this.canEnqueue = function() {
    return this.queueControl.length < this.MAX_SIZE;
  };

  this.enqueue = function(arg) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(arg);
      return this.queueControl.slice(-1);
    } else {
      return "Queue Overflow";
    }
  };

  this.dequeue = function() {
    if (!this.isEmpty()) {
      return this.queueControl.pop();
    } else {
      return "Queue Underflow";
    }
  };
}
