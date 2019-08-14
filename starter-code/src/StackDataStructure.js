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

StackDataStructure.prototype.isFull = function() {
  if (this.stackControl.length == this.MAX_SIZE) {
    return true;
  }
  return false;
};

StackDataStructure.prototype.canPush = function() {
  if (this.isFull()) {
    return false;
  }
  return true;
};

StackDataStructure.prototype.push = function(element) {
  if (this.canPush()) {
    this.stackControl.push(element);
    return this.stackControl;
  }
  return "Stack Overflow";
};

StackDataStructure.prototype.pop = function() {
  if (this.isEmpty() == false) {
    let lastElement = this.stackControl[this.stackControl.length - 1].innerHTML;
    this.stackControl.pop();
    return lastElement;
  } else {
    return "Stack Underflow";
  }
};

export { StackDataStructure };
