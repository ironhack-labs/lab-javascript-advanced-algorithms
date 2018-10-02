function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 9;
}

StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length > 0) {
    return false;
  } else {
    return true;
  }
};

StackDataStructure.prototype.canPush = function() {
  if (this.stackControl.length < this.MAX_SIZE) {
    return true;
  } else {
    return false;
  }
};

StackDataStructure.prototype.push = function(element) {
  if (this.canPush()) {
    this.stackControl.push(element)
    return this.stackControl;
  }
    else {
    return "Stack Overflow"
}};






StackDataStructure.prototype.pop = function() {
  if (this.stackControl.length > 0) {
    var lastElement = this.stackControl.pop();
    return lastElement; 
  }
  else {
    return "Stack Underflow";
  }};
