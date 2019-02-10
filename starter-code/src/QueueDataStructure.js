function QueueDataStructure() {
  this.MAX_SIZE = 10;
  this.queueControl = [];

  this.isEmpty = function() {
    if (this.queueControl.length === 0) return true;
    return false;
  };

  this.canEnqueue = function() {
    if (this.queueControl.length < this.MAX_SIZE) return true;
    return false;
  };

  this.enqueue = function(item) {
    if (item === undefined) return undefined;
    if (this.canEnqueue()) {
      this.queueControl.unshift(item);
      return this.queueControl;
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
