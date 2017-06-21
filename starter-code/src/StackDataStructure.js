function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 8;
  this.isFull = false;
}

StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length === 0) {
    return true;
  } else {
    return false;
  }
};
StackDataStructure.prototype.canPush = function() {
  if (this.stackControl.length !== this.MAX_SIZE) {
    return true;
  } else {
    return false;
  }
};
StackDataStructure.prototype.push = function(element) {
  if (this.stackControl.length !== this.MAX_SIZE) {
    this.stackControl.push(element);
    return this.stackControl;
  } else {
    return "Stack Overflow";
  }
};

StackDataStructure.prototype.pop = function() {
  if (this.stackControl.length !== 0) {
    return this.stackControl.pop();
  } else {
    return "Stack Underflow";
  }
};
