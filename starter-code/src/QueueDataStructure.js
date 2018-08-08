function QueueDataStructure (number) {
  this.queueControl = [];
  this.MAX_SIZE = number;
  this.isEmpty = function () {
  return (this.queueControl.length === 0);
    }
  this.canEnqueue = function () {
  return (this.queueControl.length !== this.MAX_SIZE);
    }
  this.enqueue = function (element) {

    if (this.canEnqueue()) {
    this.queueControl.unshift(element);
    return this.queueControl;
    }
    return "Queue Overflow"
  }

  this.dequeue = function () {
    if (!this.isEmpty()) {
    return this.queueControl[this.queueControl.length-1]
     }
    else {
      return "Queue Underflow"
    }
  }
};

var q = new QueueDataStructure;

