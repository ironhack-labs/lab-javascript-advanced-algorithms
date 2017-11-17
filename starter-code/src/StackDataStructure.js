function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function () {
  return this.stackControl.length === 0;
};

StackDataStructure.prototype.canPush = function () {
  return this.stackControl.length != this.MAX_SIZE;

};

StackDataStructure.prototype.push = function (x) {
  if (!this.canPush()){
    return "Stack Overflow";
  }
  this.stackControl.push(x);
  return this.stackControl;
};

StackDataStructure.prototype.pop = function () {
  if (this.stackControl.length === 0){
    return "Stack Underflow";
  }
  return this.stackControl.pop();
};

