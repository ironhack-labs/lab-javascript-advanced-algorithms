function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 8;
  this.isEmpty = function() {
    if (this.queueControl.length ===0) {
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
  this.enqueue = function(a) {
    if (this.queueControl.length >= this.MAX_SIZE) {
      alert("Queue Overflow");
    } else {
    this.queueControl.unshift(a);
    return this.queueControl;
  }
  };
  this.dequeue = function() {
    if (this.isEmpty()) {
      alert("Queue Underflow");
    } else {
    return this.queueControl.pop();
  }
  };

}
