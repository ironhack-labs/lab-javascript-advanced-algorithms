function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;
  this.isEmpty = function() {
    var emptyStack = [];
    if (this.queueControl.length === emptyStack.length) {
      return true;
    } else {
      return false;
    }
  };
  this.canEnqueue = function() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    } else {
      console.log("Queue Overflow");
      return false;
    }
  };
  this.enqueue = function (newNumber) {
    if (this.canEnqueue() === true) {
      this.queueControl.unshift(newNumber);
      return this.queueControl;
    } else {
      alert("Queue Overflow");
      return "Queue Overflow";
    }
  };
  this.dequeue = function () {
    if (this.queueControl.length === 0) {
      alert("Queue Underflow");
      return "Queue Underflow";
    } else {
      return this.queueControl.shift();
    }
  };
}
