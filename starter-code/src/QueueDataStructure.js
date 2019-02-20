function QueueDataStructure (maxsize) {
    this.queueControl = [];
    this.MAX_SIZE = maxsize;
    this.isEmpty = function () {
      if (this.queueControl == 0) {
        return true
      } else {
        return false
      }
    };
    this.canEnqueue = function() {
      if (this.queueControl.length < this.MAX_SIZE) {
        return true
      } else {
        return false}
    };
    this.enqueue = function (arg) {
      if (this.canEnqueue() == false ) {
        return 'Queue Overflow'
      } else {
      this.queueControl.unshift(arg);
      return this.queueControl}
    };
    this.dequeue = function (arg) {
      if (this.isEmpty() == true) {
        return 'Queue Underflow'
      } else {
      return this.queueControl.pop(arg);
      }
    };
  }
