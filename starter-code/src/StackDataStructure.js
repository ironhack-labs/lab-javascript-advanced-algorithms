function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function () {
  if (this.stackControl.length === 0) {
    return true;
  }
  return false;
};

StackDataStructure.prototype.canPush = function () {
  if (this.stackControl.length === this.MAX_SIZE) {
    return false;
  }
  return true;
};

StackDataStructure.prototype.push = function (add) {
  if (this.canPush()) {
    this.stackControl.push(add);

    return this.stackControl;
  }
  return 'Stack Overflow';
};

StackDataStructure.prototype.pop = function () {
  if (this.isEmpty()) {
    return 'Stack Underflow';
  }
  return this.stackControl.pop();
};
