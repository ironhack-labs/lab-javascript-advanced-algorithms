function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 100;
}


QueueDataStructure.prototype.isEmpty = function() {
    if (this.queueControl.length === 0) {
      return true;
    }
  
    return false;
  };
  
  QueueDataStructure.prototype.canEnqueue = function() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    }
  
    return false;
  };
  
  QueueDataStructure.prototype.enqueue = function(element) {
    if (this.canEnqueue() === false) {
      return "Queue Overflow";
    } else {

      this.queueControl.unshift(element);
      return this.queueControl;
    }
  };
  
  QueueDataStructure.prototype.dequeue = function() {
    if (this.isEmpty() === true) {
      return "Queue Underflow";
    } else {
      var dequeueElement = this.queueControl[this.queueControl.length - 1];
      this.queueControl.pop();
      return dequeueElement;
    }
  };