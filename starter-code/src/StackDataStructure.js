var stack = new StackDataStructure();

// class StackDataStructure {
//   constructor(stackControl, MAX_SIZE) {
//       this.stackControl = [];
//       this.MAX_SIZE = 8;
//   }

function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 8;
  this.isEmpty = function() {
    return this.stackControl.length === 0;
  };
  this.canPush = function() {
    return this.stackControl.length < this.MAX_SIZE;
  };
  this.push = function(elemStack) {
    if (this.canPush()) {
    this.stackControl.push(elemStack);
    return this.stackControl;
    }
    else {
      return "Stack Overflow";
    }
  };
  this.pop = function(elemStack) {
    if (!this.isEmpty()) {
      return this.stackControl.pop(elemStack);
    } 
    else {
      return "Stack Underflow";
    }
  };
}