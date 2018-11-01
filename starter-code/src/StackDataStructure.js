function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 6;
}

StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length == 0) return true;

  return false;
};

StackDataStructure.prototype.canPush = function() {
  if (this.stackControl[this.MAX_SIZE - 1] == undefined) return true;

  return false;
};

StackDataStructure.prototype.push = function(val) {
  if (!this.canPush()) return "Stack Overflow";

  this.stackControl.push(val);
  return this.stackControl;
};

StackDataStructure.prototype.pop = function() {
  if (this.isEmpty()) return "Stack Underflow";

  return this.stackControl.pop();
};