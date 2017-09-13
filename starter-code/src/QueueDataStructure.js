function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 9;
  this.isEmpty = function() {
    return this.queueControl.length === 0;
  };
  this.canPush = function() {
    return this.queueControl.length < this.MAX_SIZE;
  };
  this.push = function(element) {
    if (this.canPush()) {
      this.stackControl.unshift(element);
      return this.queueControl;
    } else {
      return "Stack Overflow";
    }
  };
  this.pop = function() {
    if (this.isEmpty()) {
      return "Stack Underflow";
    } else {
      return this.queueControl.pop();
    }
  };
}
