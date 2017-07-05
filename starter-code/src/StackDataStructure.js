function StackDataStructure() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length == 0 || this.stackControl == undefined)
    return true;
  return false;
}

StackDataStructure.prototype.canPush = function() {
  if (this.MAX_SIZE == this.stackControl.length)
    return false;
  return true;
}

StackDataStructure.prototype.push = function(elem) {
  if (this.canPush() === true) {
    this.stackControl.push(elem);
    return this.stackControl;
  }
  return "Stack Overflow";
}

StackDataStructure.prototype.pop = function() {
  if (this.isEmpty() === true)
    return "Stack Underflow";
  return this.stackControl.pop();
}
