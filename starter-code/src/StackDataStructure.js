function StackDataStructure (number) {
  this.stackControl = [];
  this.MAX_SIZE = number;
  this.isEmpty = function () {
  return (this.stackControl.length === 0);
    }
  this.canPush = function () {
  return (this.stackControl.length !== this.MAX_SIZE);
    }
  this.push = function (element) {
    if (this.canPush()) {
    this.stackControl.push(element);
    return this.stackControl;
    }
    return("Stack Overflow")
  }

  this.pop = function () {
    if (!this.isEmpty()) {
    this.stackControl.pop();
    return this.stackControl[this.stackControl.length-1]
     }
    else {
      return "Stack Underflow"
    }
  }
};


var stack = new StackDataStructure;