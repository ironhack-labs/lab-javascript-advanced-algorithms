function QueueDataStructure() {

  this.queueControl = [];
  this.MAX_SIZE = 8;

  this.isEmpty = function () {
    if (this.queueControl.length === 0) {
      return true
    } else {
      return false;
    }
  };

  this.canEnqueue = function () {
    if (this.queueControl.length === this.MAX_SIZE) {
      return false
    } else {
      return true
    }
  };

  this.enqueue = function (unit) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(unit)
      return this.queueControl;
    } else {
      return "Queue Overflow";
    }
  };

  this.dequeue = function () {
    if (this.queueControl.length === 0) {
      return 'Queue Underflow';
    } else {
      return this.queueControl.shift()
    }
  };
};
