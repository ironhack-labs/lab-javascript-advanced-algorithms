function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 8;
}

StackDataStructure.prototype.canPush = function() {
  if (this.MAX_SIZE == this.stackControl.length) {
    return false;
  } else {
    return true;
  }
};

StackDataStructure.prototype.pop = function() {
  if (this.stackControl.length == 0) {
    return "Stack Underflow";
  }
  return this.stackControl.pop();
};

StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length == 0) {
    return true;
  } else {
    return false;
  }
};

StackDataStructure.prototype.push = function(e) {
  if (this.canPush()) {
    this.stackControl.push(e);
    return this.stackControl;
  }
  return "Stack Overflow";
};


