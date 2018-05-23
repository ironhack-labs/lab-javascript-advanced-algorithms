function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 8;
}

StackDataStructure.prototype.isEmpty = function () {
  return (this.stackControl.length == 0)
}
StackDataStructure.prototype.canPush = function () {
  return (this.stackControl.length < this.MAX_SIZE)
}
StackDataStructure.prototype.pop = function () {
  if (this.isEmpty()) {
      return "Stack Underflow";
  }
  return this.stackControl.pop();
}
StackDataStructure.prototype.push = function (a) {
  if (!(this.canPush())) {
      return "Stack Overflow";
  }
  this.stackControl.push(a);
  return this.stackControl;
}