function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;

  this.isEmpty = function() {
    if (this.queueControl.length == 0) {
      return true
    } else {
      return false
    }
  }

  this.canEnqueue = function() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true
    } else {
      return false
    }
  }

  this.enqueue = function(elem) {
    if (this.canEnqueue() == true) {
      this.queueControl.unshift(elem);
      return this.queueControl;
    } else {
      return "Queue Overflow";
    }
  }

  this.dequeue = function() {
    if (this.isEmpty() == false) {
      return this.queueControl.pop();
    } else {
      return "Queue Underflow";
    }
  }
}
