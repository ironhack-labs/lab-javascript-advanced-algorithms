function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 10;
  this.isEmpty = function() {
    return this.queueControl.length === 0 ? true : false;
  };
  this.canEnqueue = function() {
    return this.queueControl.length === this.MAX_SIZE ? false : true;
  };
  this.enqueue = function(element) {
    if (this.canEnqueue() === true) {
      this.queueControl.unshift(element);
    } else {
      return "Queue Overflow";
    }
    return this.queueControl;
  };
  this.dequeue = function(element) {
    if (this.isEmpty() === true) {
      return "Queue Underflow";
    } else {
      var takenElement = this.queueControl[this.queueControl.length - 1];
      this.queueControl.splice(this.queueControl.length - 1, 1);
      return takenElement;
    }
  };
}
