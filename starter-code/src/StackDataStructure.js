function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 8;

  this.isEmpty = function() {
    if (this.stackControl.length === 0) return true;
    return false;
  };

  this.canPush = function() {
    return this.stackControl.length + 1 <= this.MAX_SIZE;
  };

  this.push = function(elem) {
    if (this.canPush()) {
      this.stackControl.push(elem);
      return this.stackControl;
    } else {
      return "Stack Overflow";
    }
  };

  this.pop = function(elem) {
    if (this.stackControl.length >= 1) {
      return this.stackControl.pop();
    } else {
      return "Stack Underflow";
    }
  };
}
