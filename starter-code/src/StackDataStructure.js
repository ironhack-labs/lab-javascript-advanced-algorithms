function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 8;
}
StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl[0] == undefined) {
    return true;
  } else {
    return false;
  }
};
StackDataStructure.prototype.canPush = function() {
  this.stackControl.push("number");
  if (this.stackControl[0] == "number") {
    return true;
  } else {
    return false;
  }
  this.stackControl.pop("number");
};

StackDataStructure.prototype.push = function(n) {
  this.MAX_SIZE++;
  this.stackControl.push(n);
  if (this.MAX_SIZE == 8) {
    alert('Stack Overflow');
  }
  return this.stackControl;


};
StackDataStructure.prototype.pop = function() {

  if (this.stackControl[0] == undefined) {

    alert('Stack Underflow');
  }
  return this.stackControl.pop();

};
