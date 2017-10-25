function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 9;

}

StackDataStructure.prototype.isEmpty = function() {
  return this.stackControl.length === 0 ? true : false;
};
StackDataStructure.prototype.canPush = function() {
  return this.stackControl.length <  this.MAX_SIZE ? true : false;
};
StackDataStructure.prototype.push = function(element) {
  if(this.canPush()) {
    this.stackControl.push(element);
    return this.stackControl;
  } else {
    return 'Stack Overflow';
  }
};
StackDataStructure.prototype.pop = function(element) {
  if(this.isEmpty()) {
    return 'Stack Underflow';
  } else {
    return this.stackControl[this.stackControl.length - 1];
    this.stackControl.pop(element);
  }
};
