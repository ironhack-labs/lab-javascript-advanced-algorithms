function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length === 0) {
    return true;
  } else {
    return false;
  }
};

StackDataStructure.prototype.canPush = function() {
  if (this.stackControl.length >= this.MAX_SIZE) {
    return false;
  } else {
    return true;
  }
};

StackDataStructure.prototype.push = function(item) {
  if (this.canPush()) {
    this.stackControl.push(item);
    return this.stackControl;
  } else {
    return "Stack Overflow";
  }
};

StackDataStructure.prototype.pop = function() {
  if (this.isEmpty()) {
    return "Stack Underflow";
  }
  return this.stackControl.pop();
};
