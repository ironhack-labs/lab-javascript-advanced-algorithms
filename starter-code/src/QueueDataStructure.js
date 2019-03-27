function QueueDataStructure () {
  
  this.queueControl = [];
  this.MAX_SIZE = 9;

  this.isEmpty = function () {
    if (this.queueControl.length === 0)   return true;
      return false;
  };

  this.canEnqueue = function () {
    if (this.queueControl.length < this.MAX_SIZE)   return true;
      return false;
  };

  this.enqueue = function (item) {
    if (this.canEnqueue()) {
        this.queueControl.unshift(item) ;
        return this.queueControl;
    } else {
      return "Queue Overflow";
    }
  };

  this.dequeue = function () {
    if (this.isEmpty())   return "Queue Underflow";
      return this.queueControl.pop();
  };




}
