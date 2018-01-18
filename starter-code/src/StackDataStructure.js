function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 8;
}  

StackDataStructure.prototype.isEmpty = function () {
  if (this.stackControl.length > 0) {
    return false;
  } else {
    return true;
  }
};

StackDataStructure.prototype.canPush = function () {
  if (this.stackControl.length >= this.MAX_SIZE) {
    return false;
  } else {
    return true;
  }
};


StackDataStructure.prototype.push = function (elem) {
  var result;
  if (this.canPush() == true) {
    this.stackControl.push(elem);
    result = this.stackControl;
  } else {
    result = 'Stack Overflow';
  }
  return result;
};

StackDataStructure.prototype.pop = function () {
  var result;
  if (this.stackControl.length <= 0)  {
    result = 'Stack Underflow';
  } else {
    result = this.stackControl.pop();
  }
  return result;
};
