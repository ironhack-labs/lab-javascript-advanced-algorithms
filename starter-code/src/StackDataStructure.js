function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 5;
}
StackDataStructure.prototype.isEmpty = function() {
  return this.stackControl.length === 0
}
StackDataStructure.prototype.canPush = function() {
  return this.stackControl.length < this.MAX_SIZE
}
StackDataStructure.prototype.push = function(e) {
  //if MAX_SIZE is reached
  if (!this.canPush()) {
    var stackOverflow = "Stack Overflow";
    return stackOverflow;
  } else {
    this.stackControl.push(e);
    return this.stackControl
  }
}
StackDataStructure.prototype.pop = function() {
  if (this.isEmpty()) {
    var stackUnderflow = "Stack Underflow";
    return stackUnderflow;
  } else {
  return this.stackControl.pop();
  }
}
