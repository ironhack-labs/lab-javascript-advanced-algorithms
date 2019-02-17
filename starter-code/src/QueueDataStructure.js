function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;
  this.isEmpty = function () {
    return this.queueControl.length === 0;
  };
  this.canEnqueue = function () {
    return this.queueControl.length < this.MAX_SIZE;
  };
  this.enqueue = function (data) {
    if ( this.canEnqueue() ) {
      this.queueControl.unshift(data); //ERROR
      return this.queueControl;
    }
    else { return 'Queue Overflow'; }
  };
  this.dequeue = function () {
    if ( !this.isEmpty() ) {
      var toReturn = this.queueControl[this.queueControl.length - 1];
      this.queueControl.shift();
      return toReturn;
    }
    else { return 'Queue Underflow'; }
  };
}
