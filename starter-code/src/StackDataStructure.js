function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 100;
  // check if we can add new elements to the stack (to avoid the stack overflow)
  // check if we can take an element from the stack (to avoid the stack underflow)
}

StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length === 0) {
    return true;
  } else {
    return false;
  }
};

StackDataStructure.prototype.canPush = function() {
  return this.stackControl < this.MAX_SIZE;
};

StackDataStructure.prototype.push = function(item) {
  if (this.stackControl.length === this.MAX_SIZE) {
    return "Stack Overflow";
  } else {
    this.stackControl.push(item);
    return [item];
  }
};

StackDataStructure.prototype.pop = function() {
  if (this.stackControl.length === 0) {
    return "Stack Underflow";
  } else {
    const lastValueInStack = this.stackControl[this.stackControl.length - 1];
    this.stackControl.pop();
    return lastValueInStack;
  }
};
