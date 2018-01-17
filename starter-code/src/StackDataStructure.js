function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 2;
}

StackDataStructure.prototype.isEmpty = function() {
  return this.stackControl.length === 0 ? true : false;
};

StackDataStructure.prototype.canPush = function() {
  return this.stackControl.length < this.MAX_SIZE ? true : false;
};

StackDataStructure.prototype.push = function(e) {
  if (this.stackControl.length === this.MAX_SIZE) {
    return "Stack Overflow";
  } else {
    this.stackControl.push(e);
    return this.stackControl;
  }
};

StackDataStructure.prototype.pop = function() {
  if (this.stackControl.length > 0) {
    return this.stackControl.pop();
  } else {
    return "Stack Underflow";
  }
};

// QUEUE
