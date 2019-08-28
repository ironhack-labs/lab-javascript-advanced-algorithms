function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 20;

  this.canEnqueue = function() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    } else return false;
  };
  this.isEmpty = function() {
    if (this.queueControl.length === 0) {
      return true;
    } else return false;
  };
  this.enqueue = function(n) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(n);
      return this.queueControl;
    } else {
      return "Queue Overflow";
    } 
  };
  this.dequeue = function(n) {
    if (this.isEmpty()) {
      return "Queue Underflow";
    } else {
      return this.queueControl.pop(n);
    }
  };
}

