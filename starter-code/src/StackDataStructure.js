function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 8;
}

StackDataStructure.prototype.isEmpty = function(){
  return this.stackControl.length === 0;
};

StackDataStructure.prototype.canPush = function() {
  if (this.stackControl.length < this.MAX_SIZE) {
    return true;
  }
  else {
    return false;
  }
};

StackDataStructure.prototype.push = function(e) {
  if (this.canPush()) {
    this.stackControl.push(e);
    return this.stackControl;
  } else {
    return "Stack Overflow";
  }
};

StackDataStructure.prototype.pop = function() {
  if (this.isEmpty()) {
    return "Stack Underflow";
  }
  return this.stackControl.pop();
};
