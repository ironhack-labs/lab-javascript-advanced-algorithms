function QueueDataStructure() {
  this.queueControl = [];

  this.MAX_SIZE = 8;

  this.isEmpty = function () {
    return this.queueControl.length < 1;
  };

  this.canEnqueue = function () {
    return this.queueControl.length < this.MAX_SIZE;
  };

  this.enqueue = function (input) {
    if (this.canEnqueue() === false) {
      return ('Queue Overflow');
    }
    this.queueControl.unshift(input);
    return this.queueControl;
  };

  this.dequeue = function () {
    if (this.isEmpty() === true) {
      return ('Queue Underflow');
    }
    var temp = this.queueControl[this.queueControl.length - 1];
    this.queueControl.shift();
    return temp;
  };
}

