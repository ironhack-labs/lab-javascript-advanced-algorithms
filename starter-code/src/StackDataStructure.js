//1st Iteration

//Stack
function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 8;
};

//this method check if the stack is empty
StackDataStructure.prototype.isEmpty = function() {
  return this.stackControl.length == 0;
};

//this method check if we can add a new element in the stack
StackDataStructure.prototype.canPush = function() {
  return this.stackControl.length < this.MAX_SIZE;
};

//this method let us add new elements to the stack:
//1. check if we can add the elements, if is TRUE... will add the element
// if is FALSE, will return "Stack Overflow"
StackDataStructure.prototype.push = function(e) {

  if (this.canPush()) {
      this.stackControl.push(e);
    return this.stackControl;
  } else {
    return "Stack Overflow";
  }
};

//This method let us delete elements from the stack
StackDataStructure.prototype.pop = function() {
  if (this.isEmpty()) {
    return 'Stack Underflow';
  } else {
    return this.stackControl.pop();
  }
};
