function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 9;
  this.isEmpty = function() {
    return this.stackControl.length === 0;
  };
  this.canPush = function() {
    return this.stackControl.length < this.MAX_SIZE;
  };
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
}
