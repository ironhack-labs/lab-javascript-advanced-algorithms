//Stack is LIFO
//Queue is FIFO

StackDataStructure.prototype.isEmpty = function() {
  var checker = this.stackControl.length;
  if (checker === 0) {
    return true;
  } else {
    return false;
  }
};

StackDataStructure.prototype.canPush = function() {
  var checker = this.stackControl.length;
  if (checker < this.MAX_SIZE) {
    // return "Stack Overflow";
    return true;
  } else {
    return false;
  }
};

StackDataStructure.prototype.push = function(x) {
  var checker = this.canPush();

  if (checker === true) {
      this.stackControl.push(x);
      return this.stackControl;

    } else {
      return "Stack Overflow";
  }
  
};

StackDataStructure.prototype.pop = function() {
  this.stack.pop();
  return "Stack Underflow";
};

function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 5;
  // this.addItem("New Item");
}

var stack;
stack = new StackDataStructure();
