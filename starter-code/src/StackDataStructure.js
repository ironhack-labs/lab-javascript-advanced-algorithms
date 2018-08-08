function StackDataStructure() {
  this.MAX_SIZE = 8;
  this.stackControl = [];
  this.push = function(element) {
    if (this.canPush()) {
      this.stackControl.push(element);
      return this.stackControl;
    } else {
      return "Stack Overflow";
    }
  };
  this.pop = function() {
    if (this.isEmpty()) {
      return "Stack Underflow";
    } else {
      return this.stackControl.pop();
    }
  };
  this.isEmpty = function() {
    return this.stackControl.length === 0;
  };
  this.canPush = function() {
    return this.stackControl.length !== this.MAX_SIZE;
  };
}
