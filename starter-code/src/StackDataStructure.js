var StackDataStructure = function() {

  this.stackControl = [];
  this.MAX_SIZE = 10;

};

StackDataStructure.prototype.isEmpty = function() {
  return this.stackControl.length === 0;
};

StackDataStructure.prototype.canPush = function() {
  if (this.stackControl.length === this.MAX_SIZE) {
    return false;
  } else {
    console.log(this.MAX_SIZE);
    console.log(this.stackControl.length);
    return true;
  }
};

StackDataStructure.prototype.push = function(item) {
  if (this.canPush()) {
    this.stackControl.push(item);
    return this.stackControl;
  } else {
    return 'Stack Overflow';
  }
};

StackDataStructure.prototype.pop = function() {
  var result = this.stackControl[this.stackControl.length - 1];
  if (this.stackControl.length === 0) {
    result = 'Stack Underflow';
  }
  return result;
};
