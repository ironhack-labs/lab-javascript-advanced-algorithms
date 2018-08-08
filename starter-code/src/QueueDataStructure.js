function QueueDataStructure() {
  this.MAX_SIZE = 10;
  this.queueControl = [];
  this.enqueue = function(element) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(element);
      return this.queueControl;
    } else {
      return "Queue Overflow";
    }
  };
  this.dequeue = function() {
    if (this.isEmpty()) {
      return "Queue Underflow";
    } else {
      return this.queueControl.pop();
    }
  };
  this.isEmpty = function() {
    return this.queueControl.length === 0;
  };
  this.canEnqueue = function() {
    return this.queueControl.length !== this.MAX_SIZE;
  };
}
