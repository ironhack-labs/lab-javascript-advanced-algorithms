function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length === 0) {
    return true;
  }
  return false;
}

StackDataStructure.prototype.canPush = function() {
  if (this.stackControl.length < this.MAX_SIZE) {
    return true;
  }
  return false;
}

StackDataStructure.prototype.push = function(pushObj) {
  if (this.canPush()) {
    this.stackControl.push(pushObj);
    return this.stackControl;
  }
  return 'Stack Overflow';
}
StackDataStructure.prototype.pop = function(popObj) {
  if (!this.isEmpty) {
    return this.stackControl.pop(popObj);
  } else {
    return 'Stack Underflow';
  }
}