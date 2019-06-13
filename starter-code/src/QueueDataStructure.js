function QueueDataStructure() {
  this.queueControl = []
  this.MAX_SIZE = 7
  this.isEmpty = function () {
    if (this.queueControl.length === 0) {
      return true;
    }
    return false;
  }
  this.canEnqueue = function () {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    }
    return false;
  }
  this.enqueue = function (x) {
    if (this.queueControl.length === this.MAX_SIZE) {
      return "Queue Overflow"

    } else if (this.queueControl.length < this.MAX_SIZE) {
      this.queueControl.unshift(x);
      return this.queueControl;
    }
  }
  this.dequeue = function () {
    if (this.queueControl.length === 0) {
      return "Queue Underflow"
    }
    return this.queueControl.pop();
  }
}
