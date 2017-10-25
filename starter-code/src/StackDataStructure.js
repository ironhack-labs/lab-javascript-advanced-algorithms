// Constructor
function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 0;
}

// Methods
// Eval if the stack is empty
StackDataStructure.prototype.isEmpty = function() {
  return this.stackControl.length == 0 ? true : false;
};

// Eval if it can add new item in the stack
StackDataStructure.prototype.canPush = function() {
  return this.stackControl.length < this.MAX_SIZE ? false : true;
};

// Add a new element in the Stack
StackDataStructure.prototype.push = function(element) {
  var msg = "Stack Overflow";

  if (this.canPush()) {
    this.stackControl.push(element);
    return this.stackControl;
  } else {
    return msg;
  }
};

// Delete a element in the Stack
StackDataStructure.prototype.pop = function() {
  var msg = "Stack Underflow";
  return this.isEmpty() ? msg :this.stackControl.pop();
};
