function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 5;
  StackDataStructure.prototype.isEmpty = function () {
    return this.stackControl.length === 0  ? true : false
  };
  StackDataStructure.prototype.canPush = function () {
    return this.stackControl.length <  this.MAX_SIZE ? true : false
  };
  StackDataStructure.prototype.push = function (element) {
    this.stackControl.push(element);
    return this.canPush() ? this.stackControl : 'Stack Overflow'
  };
  StackDataStructure.prototype.pop = function (element) {
    this.stackControl.pop(element);
    return this.isEmpty() ? 'Stack Underflow' : this.stackControl[this.stackControl.length - 1]
  };
}
