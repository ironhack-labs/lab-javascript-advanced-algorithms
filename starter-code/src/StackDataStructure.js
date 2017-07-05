function StackDataStructure () {
    // var stack = [];
    this.stackControl = [];
    this.MAX_SIZE = 42;
    this.isEmpty = function () {
      if (this.stackControl.length === 0) {
        return true;
      } else return false;
    };
    this.canPush = function () {
      if (this.stackControl.length < this.MAX_SIZE) {
        return true;
      } else {
        return  false;
      }
    }
    this.push = function (a) {
      if (this.canPush() === true) {
        this.stackControl.push(a);
      } else {
        return "Stack is full"
      }
    }
    this.pop = function () {
      if (this.stackControl.length > 0) {
        this.stackControl.pop();
      } else {
        return "Nothing to remove, Stack is empty"
      }
    }


};

// StackDataStructure.prototype.stackControl = [];
// StackDataStructure.prototype.MAX_SIZE = 42;

// var MAX_SIZE = 5;
// stack.length = MAX_SIZE;

var stack = new StackDataStructure();
console.log(stack);
console.log(stack.MAX_SIZE);
console.log(stack.MIN_SIZE);


// stack.stackConrol.push(1);
