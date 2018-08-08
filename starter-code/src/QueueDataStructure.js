function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 10;

  this.isEmpty = function() {
    if (this.queueControl.length) {
      return false;
    } else {
      return true;
    }
  };

  this.canEnqueue = function() {
    if (this.queueControl.length >= this.MAX_SIZE) {
      return false;
    } else {
      return true;
    }
  };

  this.enqueue = function(newItem) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(newItem);
      return this.queueControl;
    } else {
      return "Queue Overflow";
    }
  };

  this.dequeue = function() {
    if (this.queueControl.length > 0) {
      this.queueControl.shift();
      return this.queueControl.shift();
    } else {
      return "Queue Underflow";
    }
  };
}
