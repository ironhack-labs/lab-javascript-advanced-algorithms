function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 100;
  this.isEmpty = function() {
    if (this.stackControl.length === 0) {
      return true;
    }
    return false;
  };
  this.canPush = function() {
    if (this.stackControl.length == this.MAX_SIZE) {
      return false;
    }
    return true;
  };
  this.push = function(num) {
    if (this.canPush()) {
      this.stackControl.push(num);
      return this.stackControl;
    }
    return "Stack Overflow";
  };
  this.pop = function() {
    if (this.isEmpty() !== true) {
      return this.stackControl.pop();
    }
    return "Stack Underflow";
  };
}

// LIFO : use push and pop

// stack overflow : check array.length, if full, do nothing and return error

// stack underflow : check array.length, if = 0, do nothing and return error
