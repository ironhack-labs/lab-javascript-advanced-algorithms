function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 10;

  this.isEmpty = function() {
    if (this.queueControl == 0) {
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
    if (this.queueControl.length < this.queueControl.length + 1) {
      return this.queueControl;
    }
  };
  this.enqueue = function(element) {
    if (!this.canEnqueue()) {
      return "Queue Overflow";
    }

    this.queueControl.push(element);
    return this.queueControl.reverse();
  };
  this.dequeue = function() {
    if (!this.isEmpty()) {
      return this.queueControl.pop();
    } else {
      return "Queue Underflow";
    }
  };
}
