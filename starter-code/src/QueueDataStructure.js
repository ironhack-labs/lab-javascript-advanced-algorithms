function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 5;
  // Check if queueControl is empty
  this.isEmpty = function () {
    if (this.queueControl.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  // Check if we can push a new element
  this.canEnqueue = function () {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }
  // Push new element to queue (to front with unshift())
  this.enqueue = function (input) {
    if (this.canEnqueue()) { // is true
      this.queueControl.unshift(input);
      return this.queueControl;
    } else {
      return "Queue Overflow"
    }
  }
  // select (/ remove?) last element
  this.dequeue = function () {
    if(this.isEmpty()) { // is true
      return "Queue Underflow";
    } else {
      // return last element (each new Queue is added to beginning of Array with unshift)
      lastEle = this.queueControl.length - 1;
      // this.stackControl.splice(lastEle);
      return this.queueControl[lastEle];
    }
  }
};

var queue = new QueueDataStructure();
