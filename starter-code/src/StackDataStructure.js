function StackDataStructure(max) {
  this.stackControl = [];
  this.MAX_SIZE = max || 8;
}
StackDataStructure.prototype.isEmpty = function () {
  return this.stackControl.length == 0
}
StackDataStructure.prototype.canPush = function () {
  return this.stackControl.length < this.MAX_SIZE
}
StackDataStructure.prototype.push = function (element) {
  if (this.canPush()) {
    this.stackControl.push(element);
    return this.stackControl
  }
  return "Stack Overflow"
}
StackDataStructure.prototype.pop = function (element) {
  if (!this.isEmpty()) {
    return this.stackControl.pop();
  }
  return "Stack Underflow"
}

