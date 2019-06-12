stack = new StackDataStructure();

function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 10;
  this.isEmpty = function() {
    if (this.stackControl.length === 0) {
      return true;
    } else {
      return false;
    }
  };
  this.canPush = function() {
    if (this.stackControl < this.MAX_SIZE) {
      return true;
    }
    return false;
  };

  this.push = function(x) {
    
    if (this.stackControl.length === this.MAX_SIZE) {
      console.log("Stack Overflow");
    } else if (this.stackControl.length < this.MAX_SIZE) {
      this.stackControl.push(x);
      console.log("Stack Overflow");
      return this.stackControl;
    }
  };
  this.pop = function() {
    if (this.stackControl.length === 0) {
      return "Stack Underflow";
    }
    return this.stackControl.pop();
  };
}
var AddClick = document.querySelector("#addButton");

AddClick.addEventListener("click", function() {
  var formInput = document.querySelector("#inputValue2").value;
  stack.stackControl=1;
  stack.call.push(1);
 console.log(stack.stackControl)
 console.log(stack.MAX_SIZE)

  document.querySelector("#htmlText").innerHTML = formInput;
});
