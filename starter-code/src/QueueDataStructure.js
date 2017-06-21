function QueueDataStructure () {
}

function QueueDataStructure () {
  this.queueControl = [],
  this.MAX_SIZE = 8,
  this.isEmpty = function() {
    if (this.queueControl.length === 0) {
      return true;
    }else {
      return false;
    }
  },
  this.canEnqueue = function() {
    // if (this.stackControl.length < this.MAX_SIZE) {
    //   return true;
    // }else {
    //   return false;
    // }
    return this.queueControl.length < this.MAX_SIZE;
  },
  this.enqueue = function(element) {
    if (this.canEnqueue()) {
    this.queueControl.unshift(element);
    return this.queueControl;
  } else {
    return "Queue Overflow";
  }

  },
  this.dequeue = function() {
    if (this.isEmpty() === false) {
      return this.queueControl[this.queueControl.length-1];
    }else {
      return 'Queue Underflow';
    }
  }
}
