function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 5;
  this.isEmpty = function() {
    if (this.stackControl.length === 0) {
      return true;
    } else {
      return false;
    }
  };
  this.canPush = function() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  };
  this.push = function(val) {
    if (this.canPush() === false) {
      return "Stack Overflow";
    } else {
      this.stackControl.push(val);
      return this.stackControl;
    }
  };
  this.pop = function(val) {
    if (this.stackControl.length < 1) {
      return "Stack Underflow";
    } else {
      var lastElement = this.stackControl.pop(val);
      return lastElement;
    }
  };
}
