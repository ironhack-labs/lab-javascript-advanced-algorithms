function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 5;
}

StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length == 0) {
    return true;
  }
  return false;
};

StackDataStructure.prototype.canPush = function() {
  if (this.stackControl.length < this.MAX_SIZE) {
    return true;
  }
  return false;
};


StackDataStructure.prototype.push = function(el) {
  if (this.canPush()) {
    this.stackControl.push(el);
    return this.stackControl;
  } else {
    return "Stack Overflow";
  }

};

StackDataStructure.prototype.pop = function() {
  if (this.isEmpty()) {
    return 'Stack Underflow';
  }
  return this.stackControl.pop();


};
