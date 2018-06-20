function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 8;
}

StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length == 0) {
    return true;
  } else {
    return false;
  }
};

StackDataStructure.prototype.canPush = function() {
  if (this.stackControl.length < this.MAX_SIZE) {
    return true;
  }
  return false;
};

StackDataStructure.prototype.push = function(e) {
  this.stackControl.push(e);
  if (this.MAX_SIZE <= this.stackControl.length) {
    return "Stack Overflow";
  }
  return this.stackControl;
};

StackDataStructure.prototype.pop = function(e) {
  var lastElement = this.stackControl[this.stackControl.length - 1];
  this.stackControl.pop(e);
  if (this.stackControl.length == 0) {
    return "Stack Underflow";
  }
  return lastElement;
};