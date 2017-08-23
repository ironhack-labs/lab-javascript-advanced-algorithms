  function QueueDataStructure() {
    this.queueControl = [];
    this.MAX_SIZE = 8;
  }
  QueueDataStructure.prototype.isEmpty = function() {
    return this.queueControl.length === 0;
  };
  QueueDataStructure.prototype.canEnqueue = function() {
    return this.queueControl.length === this.MAX_SIZE ? false : true;
  };
  QueueDataStructure.prototype.enqueue = function(item) {
    if (this.queueControl.length === this.MAX_SIZE) {
      return "Queue Overflow";
    } else {
      this.queueControl.unshift(item);
      return this.queueControl;
    }
  };
  QueueDataStructure.prototype.dequeue = function() {
    return this.isEmpty() ? "Queue Underflow" : this.queueControl.pop();

  };
