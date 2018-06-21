function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 8;
  
  StackDataStructure.prototype.isEmpty = function () {
    return this.stackControl.length == 0;  
  }

  StackDataStructure.prototype.canPush = function() {
    return this.stackControl.length < this.MAX_SIZE;
  }

  StackDataStructure.prototype.push = function(e) {
    if (this.canPush()) {
      this.stackControl.push(e)
      return this.stackControl;
    }
    return "Stack Overflow";
  }

  StackDataStructure.prototype.pop = function(e) {
    if (this.stackControl != 0) {
      return this.stackControl.pop(e)
  }
  else {
      return "Stack Underflow"
  }
  }
}


