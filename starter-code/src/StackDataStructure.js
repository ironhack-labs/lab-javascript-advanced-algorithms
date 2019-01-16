function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 10;
}

StackDataStructure.prototype.push = function(element) {
  if (this.stackControl.length === this.MAX_SIZE) {
    return "Stack Overflow";
  }
  this.stackControl.push(element);
  return this.stackControl;
};

StackDataStructure.prototype.isEmpty = function() {
  return this.stackControl.length === 0;
};

StackDataStructure.prototype.canPush = function() {
  return this.stackControl.length < this.MAX_SIZE;
};

StackDataStructure.prototype.pop = function() {
  if (this.stackControl.length === 0) {
    return "Stack Underflow";
  }
  return this.stackControl.pop();
};
