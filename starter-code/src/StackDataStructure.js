function StackDataStructure() {
  this.stackControl = []
  this.MAX_SIZE = 7
  this.isEmpty = function () {
    if (this.stackControl.length === 0) {
      return true;
    }
    return false;
  }
  this.canPush = function () {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    }
    return false;
  }
  
  this.push = function (x) {
    if (this.stackControl.length === this.MAX_SIZE) {
      return "Stack Overflow"
    } else if (this.stackControl.length < this.MAX_SIZE) {
      this.stackControl.push(x);
      return this.stackControl;
    }
  }
  this.pop = function () {
    if (this.stackControl.length === 0) {
      return "Stack Underflow"
    }
    return this.stackControl.pop();
   }
}


