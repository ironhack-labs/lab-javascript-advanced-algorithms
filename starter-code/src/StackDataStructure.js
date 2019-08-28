function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 10;
  this.isEmpty = function() {
    return this.stackControl.length == 0;
  };
  this.canPush = function() {
    return this.MAX_SIZE > this.stackControl.length;
  };
  this.push = function(element) {
    if (this.canPush()) {
      this.stackControl.push(element);
      return this.stackControl;
    } else return "Stack Overflow";
  };
  this.pop = function(element) {
    if (!this.isEmpty()) return this.stackControl.pop();
    else return "Stack Underflow";
  };
}
