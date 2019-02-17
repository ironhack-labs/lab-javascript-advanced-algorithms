function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 5;

};


StackDataStructure.prototype.isEmpty = function () {
  if (this.stackControl.length == 0) {
    return true;
  }
  return false;
};


StackDataStructure.prototype.canPush = function () {
  if (this.stackControl.length < this.MAX_SIZE) {
    return true;
  }
  return false;
};


StackDataStructure.prototype.push = function (element) {

  if (this.canPush() == false) {
    return `Stack Overflow`;
  }
  if (element != "") {
    this.stackControl.push(element);
  }

  var report = this.isEmpty();
  return this.stackControl;
};

StackDataStructure.prototype.pop = function () {

  if (this.isEmpty() == true) {
    var popUpValue = "Stack Underflow";
  } else {
    var popUpValue = this.stackControl.pop();
  }
  return popUpValue;
}