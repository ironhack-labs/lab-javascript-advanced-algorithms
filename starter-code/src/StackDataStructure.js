function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 8;
  // Check if stackControl is empty
  this.isEmpty = function () {
    if (this.stackControl.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  // Check if we can push a new element
  this.canPush = function () {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }
  // Push new element to stack
  this.push = function (input) {
    if (this.canPush()) { // is true
      this.stackControl.push(input);
      return this.stackControl;
    } else {
      return "Stack Overflow"
    }
  }
  // select (/ remove) last element
  this.pop = function () {
    if(this.isEmpty()) { // is true
      return "Stack Underflow";
    } else {
      // return last element
      lastEle = this.stackControl.length - 1;
      this.stackControl.splice(lastEle); 
      // return this.stackControl[lastEle];
    }
  }
}

var stack = new StackDataStructure();
// console.log(stack);



