function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 0;
  this.isEmpty = function() {
    if (this.queueControl === 0) {
      return true;
    } else {
      return false;
    }
  };

  this.canEnqueue = function() {
    if (isEmpty) {
      return true;
    } else {
      return false;
    }
  };
  this.enqueue = function() {
    if (this.queueControl === 0) {
      return this.queueControl.unshift();
    } else {
      return false;
    }
  };
  this.dequeue = function() {
    if (this.queueControl !== 0) {
      return this.queueControl.pop();
    } else {
      return false;
    }
  };

  }
