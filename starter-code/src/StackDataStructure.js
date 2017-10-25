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

StackDataStructure.prototype.canPush = function() {
  if (this.stackControl.length < this.MAX_SIZE) {
    return true;
  } else {
    return false;
  }
};

StackDataStructure.prototype.push = function(e) {
  if (this.canPush()) {
    this.stackControl.push(e);
    return this.stackControl;
  } else {
    return 'Stack Overflow';
  }
};

StackDataStructure.prototype.pop = function() {
  if (this.isEmpty()) {
    return 'Stack Underflow';
  } else {
    e = this.stackControl[this.stackControl.length - 1];
    this.stackControl.pop();
    return e;
  }
};
