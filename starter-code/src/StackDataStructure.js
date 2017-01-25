function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 10;
  this.isEmpty = function() {
    var emptyStack = [];
    if (this.stackControl.length === emptyStack.length) {
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
  this.push = function(newNumber) {
    if (this.canPush() === true) {
      this.stackControl.push(newNumber);
      return this.stackControl;
    } else {
      return "Stack Overflow";
    }
  };
  this.pop = function() {
    if (this.stackControl.length === 0) {
      return "Stack Underflow";
    } else {
      return this.stackControl.pop();
    }
  };
}
