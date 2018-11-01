function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 8;

  this.isEmpty = function() {
    return !this.queueControl.length;
  }

  this.canEnqueue = function() {
    return this.queueControl.length < this.MAX_SIZE;
  }

  this.enqueue = function(item) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(item);
      console.log(this.queueControl);
      return this.queueControl;
    } else {
      return 'Queue Overflow'
    }
  }

  this.dequeue = function() {
    return this.isEmpty() ? 'Queue Underflow' : this.queueControl.pop();
  }
}
