function StackDataStructure() {
  this.MAX_SIZE = 10;
  this.stackControl = [];

  this.isEmpty = function() {
    if (this.stackControl.length === 0) return true;
    return false;
  };

  this.canPush = function() {
    if (this.stackControl.length < this.MAX_SIZE) return true;
    return false;
  };

  this.push = function(item) {
    if (item === undefined) return undefined;
    if (this.canPush()) {
      this.stackControl.push(item);
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
