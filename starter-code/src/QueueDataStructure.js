function QueueDataStructure() {
    this.queueControl = [];
    this.MAX_SIZE = 5;
    this.isEmpty = function() {
      if (this.queueControl.length === 0) {
        return true;
      } else {
        return false;
      }
    };
    this.canEnqueue = function() {
      if (this.queueControl.length < this.MAX_SIZE) {
        return true;
      } else {
        return false;
      }
    };
    this.enqueue = function(val) {
      if (this.canEnqueue() === false) {
        return "Queue Overflow";
      } else {
        this.queueControl.unshift(val);
        return this.queueControl;
      }
    };
    this.dequeue = function(val) {
      if (this.queueControl.length < 1) {
        return "Queue Underflow";
      } else {
        var lastElement = this.queueControl.pop(val);
        return lastElement;
      }
    };
  }