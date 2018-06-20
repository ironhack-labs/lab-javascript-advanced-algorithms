function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 10;
  this.isEmpty = function() {
    return this.queueControl.length == 0;
  };
  this.canEnqueue = function() {
    return this.queueControl.length < this.MAX_SIZE;
  };
  this.enqueue = function(e) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(e);
      return this.queueControl;
    } else return "Queue Overflow";
  };
  this.dequeue = function() {
    if (!this.isEmpty()) {
      return this.queueControl.pop();
    } else {
      return "Queue Underflow";
    }
  };
}
