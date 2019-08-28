function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 8;

  this.isEmpty = function() {
    return this.stackControl.length == 0;
  };

  this.canPush = function() {
    return this.stackControl.length < this.MAX_SIZE;
  };

  this.push = function(arg) {
    if (this.canPush()) {
      this.stackControl.push(arg);
      return this.stackControl;
    } else {
      return "Stack Overflow";
    }
  };

  this.pop = function() {
    if (!this.isEmpty()) {
      return this.stackControl.pop();
    } else {
      return "Stack Underflow";
    }
  };
}
