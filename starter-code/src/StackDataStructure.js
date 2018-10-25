function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 1;

};

StackDataStructure.prototype.isEmpty = function () {
  if (this.stackControl.length === 0) {
    return true;
  }
  return false;
};

StackDataStructure.prototype.canPush = function () {
  if (this.stackControl.length < this.MAX_SIZE) {
    return true;
  }
  return false;
};

StackDataStructure.prototype.push = function (stackUnit) {
  if (this.canPush()) {
    this.stackControl.push(stackUnit);
    return this.stackControl;
  }
  return 'Stack Overflow';
};

StackDataStructure.prototype.pop = function () {
  if (this.isEmpty()) {
    return 'Stack Underflow';
  }
  let lastElement = this.stackControl.slice(-1).pop();
  this.stackControl.pop();
  return lastElement;
};
