// new StackDataStructure
// on add button click
// -- push input value to the array
// -- if canPush is false
// -- -- remove one of the elements from the top of the stack
//
// on remove button click
// -- remove last div
//
//
// if canPush is false
//
// if stackoverflow
// -- show that on the screen
// if stack Underflow
// -- show that on the screen




function StackDataStructure (stack) {
  this.stackControl = [];
  this.MAX_SIZE = 20;
}

StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length > 0) {
    return false;
  }
  else {
    return true;
  }
};

StackDataStructure.prototype.canPush = function() {
  if (this.stackControl.length === this.MAX_SIZE){
    return false;
  }
  else {
    return true;
  }
};

StackDataStructure.prototype.push = function(i) {
  this.stackControl.push(i);
  if (this.stackControl.length > this.MAX_SIZE) {
    return "Stack Overflow";
  }
  return this.stackControl;
};

StackDataStructure.prototype.pop = function() {
  if (this.stackControl.length < 1) {
    return "Stack Underflow";
  }
  else {
    return this.stackControl[this.stackControl.length - 1];
  }
};
