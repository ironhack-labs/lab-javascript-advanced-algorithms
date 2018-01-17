function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 6;
}

StackDataStructure.prototype.isEmpty = function() {
  return this.stackControl.length === 0 ? true : false;
};

StackDataStructure.prototype.canPush = function() {
  return this.stackControl.length < this.MAX_SIZE ? true : false;
};

StackDataStructure.prototype.push = function(arg) {
  if (this.stackControl.length < this.MAX_SIZE) {
    this.stackControl.push(arg);
    return this.stackControl;
  } else {
    return "Stack Overflow";
  }
};

StackDataStructure.prototype.pop = function(rmvarg) {
  if (this.stackControl.length === 0) {
    return "Stack Underflow";
  } else {
    return this.stackControl.pop(rmvarg);
  }
};
