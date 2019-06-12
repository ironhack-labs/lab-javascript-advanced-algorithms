var queue = new QueueDataStructure();


function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 8;
  this.isEmpty = function() {
    return this.queueControl.length === 0;
  };
  this.canEnqueue = function() {
    return this.queueControl.length < this.MAX_SIZE;
  };
  this.enqueue = function(elemStack) {
    if (this.canEnqueue()) {
    this.queueControl.unshift(elemStack);
    return this.queueControl;
    }
    else {
      return "Queue Overflow"
      
    }
  };
  this.dequeue = function(elemStack) {
    if (!this.isEmpty()) {
      return this.queueControl.pop(elemStack);
    } 
    else {
     return "Queue Underflow";
     //return "Stack Overflow";
    }
  };
}

