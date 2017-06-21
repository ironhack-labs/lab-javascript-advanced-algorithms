function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 15;
}

StackDataStructure.prototype.isEmpty = function() {
    return this.stackControl.length === 0;
};


StackDataStructure.prototype.canPush = function() {
  if (this.stackControl.length < this.MAX_SIZE) {
    return true;
    } else {
    return false;
  }
};

StackDataStructure.prototype.push = function(toAdd) {
  if (this.canPush()) {
    this.stackControl.push(toAdd);
    return this.stackControl;
}
else {
  return 'Stack Overflow';
}
};

StackDataStructure.prototype.pop = function() {
      if (this.isEmpty()) {
        return "Stack Underflow";
      }
      else {
      return this.stackControl.pop();
    }
};
