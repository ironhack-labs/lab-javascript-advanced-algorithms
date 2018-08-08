function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 10;

  this.isEmpty = function() {
    if (this.stackControl.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  // Should have a method to check if we can push elements into the stack
  this.canPush = function() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  };

  this.push = function(newItem) {
    //"Should return 'Stack Overflow' if the stack is full"
    if (this.canPush()) {
      this.stackControl.push(newItem);
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
let stack = new StackDataStructure();
stack.push(19);

console.log(stack);
