function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 8;
}

StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length === 0) {
    return true;
  } else {
    return false;
  }
};

StackDataStructure.prototype.canPush = function() {
  if (this.stackControl.length === this.MAX_SIZE) {
    return false;
  } else {
    return true;
  }
};

StackDataStructure.prototype.push = function(element) {
  if (this.stackControl.length === this.MAX_SIZE) {
    return "Stack Overflow";
  } else {
    this.stackControl.push(element);
    return this.stackControl;
  }
};

StackDataStructure.prototype.pop = function() {
  if (this.stackControl.length === 0) {
    return 'Stack Underflow';
  }
  else {
    var a = this.stackControl[this.stackControl.length-1];
    this.stackControl.pop();
    return a;
}
};

var stack = new StackDataStructure();
