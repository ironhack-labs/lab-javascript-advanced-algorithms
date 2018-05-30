function StackDataStructure(maxItems = 5) {
  this.MAX_SIZE = maxItems;
  this.stackControl = [];
}
StackDataStructure.prototype.isEmpty = function() {
  return this.stackControl.length === 0;
};

StackDataStructure.prototype.canPush = function() {
  return this.MAX_SIZE !== this.stackControl.length;
};

StackDataStructure.prototype.push = function(item) {
  if (this.canPush()) {
    this.stackControl.push(item);
    return this.stackControl;
  }
  return "Stack Overflow";
};

StackDataStructure.prototype.pop = function() {
  if (this.isEmpty()) {
    return "Stack Underflow";
  }
  return this.stackControl.pop();
};
