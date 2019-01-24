function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 10;

  this.isEmpty = function() {
    if (this.queueControl.length === 0) return true;
    return false;
  };

  this.canEnqueue = function() {
    return this.queueControl.length + 1 <= this.MAX_SIZE;
  };

  this.enqueue = function(elem) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(elem);
      return this.queueControl;
    } else {
      return "Queue Overflow";
    }
  };
  this.dequeue = function() {
    if (this.queueControl.length >= 1) {
      return this.queueControl.pop();
    } else {
      return "Queue Underflow";
    }
  };
}
