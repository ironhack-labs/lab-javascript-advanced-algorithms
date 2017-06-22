function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;
}


QueueDataStructure.prototype.isEmpty = function () {
     return this.queueControl.length === 0? true : false;

};

QueueDataStructure.prototype.canEnqueue = function () {
    return this.queueControl.length <  this.MAX_SIZE? true: false;
};

QueueDataStructure.prototype.enqueue = function (x) {
  var check= this.canEnqueue();
    if (check) {
      this.queueControl.unshift(x);
      return this.queueControl;
    } else {
      return "Queue Overflow";
    }

};

QueueDataStructure.prototype.dequeue = function (x) {
  var check = this.isEmpty();
  if (check) {
    return "Queue Underflow";
  } else {
    return this.queueControl.pop(x);
  }

};
