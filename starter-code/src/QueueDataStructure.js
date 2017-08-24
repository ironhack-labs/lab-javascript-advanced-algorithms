function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 100;
  var that = this;
  this.isEmpty = function () {
    if (that.queueControl.length === 0) {
      return true;
    } else {
      return false;
    }
  };
  this.canEnqueue = function () {
    if (that.queueControl.length !== that.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  };
  this.enqueue = function (x) {
    if (that.canEnqueue()) {
      that.queueControl.unshift(x);
      return that.queueControl;
    } else {
      return ("Queue Overflow");
    }
  };
  this.dequeue = function () {
    if (that.queueControl.length !== 0) {
      return that.queueControl.pop();
    } else {
      return "Queue Underflow";
    }
  };
}
