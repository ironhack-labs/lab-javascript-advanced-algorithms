function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 20;

  this.canPush = function() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else return false;
  };
  this.isEmpty = function() {
    if (this.stackControl.length === 0) {
      return true;
    } else return false;
  };
  this.push = function(n) {
    if (this.canPush()) {
      this.stackControl.push(n);
      return this.stackControl;
    } else {
      return "Stack Overflow";
    } 
  };
  this.pop = function(n) {
    if (this.isEmpty()) {
      return "Stack Underflow";
    } else {
      return this.stackControl.pop(n);
    }
  };
}
