function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 2;
}

QueueDataStructure.prototype.isEmpty = function() {
    if (this.queueControl.length == 0) {
      return true;
    } else {
      return false;
    }
  };

  QueueDataStructure.prototype.canEnqueue = function() {
    if (this.queueControl.length < this.MAX_SIZE || this.isEmpty() == true) {
          return true;
      }
  else {
      return false;
    }
  };

  QueueDataStructure.prototype.enqueue= function(e) {
    if (this.canEnqueue() == true) {
        this.queueControl.unshift(e);
        return this.queueControl;
    } else {
        return "Queue Overflow";
    }
}

QueueDataStructure.prototype.dequeue = function(e) {
    if (this.isEmpty() == true) {
        return "Queue Underflow";
    } else { 
    return this.queueControl.pop(e);
    }
};