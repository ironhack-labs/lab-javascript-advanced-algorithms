function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE     = 8;
}  
  QueueDataStructure.prototype.isEmpty = function () {
    return this.queueControl.length === 0;
  };
  
  QueueDataStructure.prototype.canEnqueue = function () {
    return this.queueControl.length < this.MAX_SIZE;
  };
  
  QueueDataStructure.prototype.enqueue = function (element) {
    if (!this.canEnqueue()) {
      return "Queue Overflow";
    }
  
    this.queueControl.reverse().push(element);
    return this.queueControl.reverse();
  };
  
  QueueDataStructure.prototype.dequeue = function (element) {
    if (this.isEmpty()) {
      return "Queue Underflow";
    }
  
    return this.queueControl.pop();
  };