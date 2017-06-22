function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function () {
     return this.stackControl.length === 0? true : false;

};

StackDataStructure.prototype.canPush = function () {
    return this.stackControl.length <  this.MAX_SIZE? true: false;
};

StackDataStructure.prototype.push = function (x) {
  var check= this.canPush();
    if (check) {
      this.stackControl.push(x);
      return this.stackControl;
    } else {
      return "Stack Overflow";
    }

};

StackDataStructure.prototype.pop = function (x) {
  var check = this.isEmpty();
  if (check) {
    return "Stack Underflow";
  } else {
    return this.stackControl.pop(x);
  }

};
