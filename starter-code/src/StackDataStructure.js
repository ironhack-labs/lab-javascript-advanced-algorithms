function StackDataStructure(stack) {
  this.stackControl = [];
  this.MAX_SIZE = 8;
}

StackDataStructure.prototype.canPush = function () {
  return (this.stackControl.length < this.MAX_SIZE);
};
StackDataStructure.prototype.isEmpty = function () {
  return (this.stackControl.length == 0);
};
StackDataStructure.prototype.push = function (stack) {
  if (this.canPush()) {
    this.stackControl.push(stack);
  } else {
    return 'Stack Overflow';
  }
  return this.stackControl;
};
StackDataStructure.prototype.pop = function () {
  if (!this.isEmpty()) {
    return this.stackControl.pop();
  } else {
    return 'Stack Underflow';
  }
};