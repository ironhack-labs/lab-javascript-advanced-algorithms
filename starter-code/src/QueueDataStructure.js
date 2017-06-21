var QueueDataStructure = function () {

this.queueControl = [];
this.MAX_SIZE = 10;

};

QueueDataStructure.prototype.isEmpty = function () {
   if (this.queueControl.length === 0) {
     return true;
   }else {
     return false;
   }
};

QueueDataStructure.prototype.canEnqueue = function () {
  if (this.queueControl.length === this.MAX_SIZE) {
      return false;
  }else {
    return true;
  }
};

QueueDataStructure.prototype.enqueue = function (item) {
  if (this.canEnqueue()) {
    this.queueControl.unshift(item);
    return this.queueControl;
  }else {
    return 'Queue Overflow';
  }

};

QueueDataStructure.prototype.dequeue = function () {
  if (this.queueControl.length === 0){
    return 'Queue Underflow';
  }else {
    return this.queueControl[this.queueControl.length-1];}

};
