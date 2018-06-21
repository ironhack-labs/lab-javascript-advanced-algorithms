function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 8;

  QueueDataStructure.prototype.isEmpty = function () {
    return this.queueControl.length == 0; 
  }

  QueueDataStructure.prototype.canEnqueue = function() {
    return this.queueControl.length < this.MAX_SIZE
  }

  QueueDataStructure.prototype.enqueue = function(e) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(e)
      return this.queueControl;
    }
    return "Queue Overflow";
  }

  QueueDataStructure.prototype.dequeue = function(e) {
    if (this.queueControl != 0) {
      return this.queueControl.pop(e)
  }
  else {
      return "Queue Underflow"
  }
  }























}
