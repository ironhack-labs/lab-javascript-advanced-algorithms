function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;
  this.isEmpty = function() {
    if (this.queueControl.length == 0) {
      return true;
    } else {
      return false;
    }
  };
  this.canEnqueue = function() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  };
  this.enqueue = function(a) {
    if (this.canEnqueue()) {
      this.queueControl.push(a);
      return this.queueControl;

    } else {
      return "Queue Overflow";
    }
    };
  this.dequeue = function(a){
    if (this.isEmpty()) {
      return "Queue Underflow";
    } else {
      return this.queueControl.unshift(a);
    }
  };
}
