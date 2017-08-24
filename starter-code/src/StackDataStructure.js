function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 5;
}
StackDataStructure.prototype.isEmpty = function() {
  return this.stackControl.length > 0 ? false : true;

};
StackDataStructure.prototype.canPush = function() {
  return this.stackControl.length === this.MAX_SIZE ? false : true;

};

StackDataStructure.prototype.push = function(num) {
  if (this.stackControl.length < this.MAX_SIZE) {
    this.stackControl.push(num);
    return this.stackControl;
  } else {
    return "Stack Overflow";
  }
};

StackDataStructure.prototype.pop = function() {
  if (this.stackControl.length === 0) {
    return "Stack Underflow";
  } else {
    return this.stackControl.pop();
  }
};