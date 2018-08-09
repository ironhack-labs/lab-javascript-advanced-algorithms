function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 8;

  this.isEmpty = function() {
    if (this.queueControl.length === 0) return true;
    else return false;
  };

  this.canEnqueue = function() {
    if (this.queueControl.length < this.MAX_SIZE) return true;
    else return false;
  };

  this.enqueue = function(el) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(el);
      return this.queueControl;
    } else return "Queue Overflow";
  };

  this.dequeue = function() {
    if (this.isEmpty()) return "Queue Underflow";
    else {
      this.queueControl.unshift();
      return this.queueControl[this.queueControl.length - 1];
    }
  };
}
