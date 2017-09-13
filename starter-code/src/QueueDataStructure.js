function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 100;
  this.isEmpty = function() {
    if (this.queueControl.length === 0) {
      return true;
    }
    return false;
  };
  this.canEnqueue = function() {
    if (this.queueControl.length === this.MAX_SIZE) {
      return false;
    }
    return true;
  };
  this.enqueue = function(num) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(num);
      return this.queueControl;
    } else {
      return "Queue Overflow";
    }
  };
  this.dequeue = function() {
    if (this.isEmpty === false) {
      return this.queueControl.pop();
    } else {
      return "Queue Underflow";
    }
  };
}
