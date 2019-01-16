function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 0;

  this.isEmpty = function () {
    if (this.queueControl.length === 0) return true;
    else return false;
  }

  this.canEnqueue = function () {
    if (this.queueControl.length < this.MAX_SIZE) return true;
    else return false;
  }

  this.enqueue = function (data) {
    if (this.canEnqueue === false) return "Queue Overflow";
    else {
      this.queueControl.unshift(data);
      return this.queueControl;
    }
  }

  this.dequeue = function () {
    if (this.isEmpty) return "Queue Underflow";
    else return this.queueControl.pop();
  }
}
