function QueueDataStructure() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }
  
  QueueDataStructure.prototype.isEmpty = function () {
    if (this.queueControl.length === 0) {
      return true;
    }
    return false;
  };
  
  QueueDataStructure.prototype.canEnqueue = function () {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    }
    return false;
  };
  
  QueueDataStructure.prototype.enqueue = function (item) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(item);
      return this.queueControl;
    }
    return ('Queue Overflow');
  };
  
  QueueDataStructure.prototype.dequeue = function (item) {
    if (this.isEmpty()) {
      return ('Queue Underflow');
    }
    return this.queueControl.pop(item);
  };