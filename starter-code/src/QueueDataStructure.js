function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 5;
  this.isEmpty = function() {
    if(this.queueControl.length ===0) {
      return true;
    } else {
      return false;
    }
  }
  this.canEnqueue = function () {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }
  this.enqueue = function(newQueue) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(newQueue);
      return this.queueControl;
    } else {
      return "Queue Overflow";
    }
  }
  this.dequeue = function () {
    if(this.isEmpty()) {
      return "Queue Underflow";
    } else {
      return  this.queueControl.pop();
    }
  }
}
