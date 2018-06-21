function QueueDataStructure () {
  this.queueControles = [];
  this.MAX_SIZE = 10;

  this.isEmpty = function() {
    if (this.queueControles == 0) {
      return true;
    } else {
      return false;
    }
  };

  this.canEnqueue = function() {
    if (this.queueControles.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  };

  this.enqueue = function(x) {
    if (this.canEnqueue()) {
      this.queueControles.unshift(x);
      return this.queueControles;
    } else {
      return "Muchacho! Queue Overflow";
    }
  };

  this.dequeue = function() {
    if (this.queueControles.length == 0) {
      return "Queue Underflow";
    } else {
      return this.queueControles[this.queueControles.length - 1];
    }
  };

}
