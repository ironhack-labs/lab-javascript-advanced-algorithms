function StackDataStructure (stackControl) {
  this.stackControl = [];
  this.MAX_SIZE = 2;
}

StackDataStructure.prototype.isEmpty = function(number) {

  if (this.stackControl === []) {
    return true;
  }
  if (this.stackControl.length > 0) {
    return false;
  }
  return true;
};

StackDataStructure.prototype.canPush = function(number) {
  if (this.stackControl.length === this.MAX_SIZE) {
    return true;
  }
};

StackDataStructure.prototype.push = function(number) {
  if (this.stackControl.length === this.MAX_SIZE) {
    return 'Stack Overflow';
  }

  this.stackControl.push(number);


  return this.stackControl;
};

StackDataStructure.prototype.pop = function(number) {
  if (this.stackControl.length === 0) {
    return 'Stack Underflow';
  }
  return this.stackControl.pop(number);
};

StackDataStructure.prototype.canPush = function(number) {
  if (this.stackControl.length === this.MAX_SIZE) {
    return false;
  }
  return true;
};
