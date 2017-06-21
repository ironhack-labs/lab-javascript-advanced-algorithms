function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;
  this.isEmpty = function () {
    return this.queueControl.length === 0;
  };
  this.canEnqueue = function() {
    return this.queueControl.length < this.MAX_SIZE;
  };
  this.enqueue = function(element) {
    if (this.canEnqueue()) {
      this.queueControl.splice(0, 0, element);
      return this.queueControl;
    }
    return 'Queue Overflow';
  };
  this.dequeue = function (element) {
    if (this.isEmpty()) {
      return 'Queue Underflow';
    }
    var splicedArray = this.queueControl.splice(this.queueControl.length - 1, 1);
    return splicedArray[0];
  };
}
