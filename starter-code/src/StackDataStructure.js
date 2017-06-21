function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 8;
  this.isEmpty = function() {
    if (this.stackControl.length === 0) {
      return true;
    } else {
      return false;
    }
  };
  this.canPush = function() {
    if (this.stackControl.length<this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  };
  this.push = function(a) {
    if(this.canPush()){
      this.stackControl.push(a);
      return this.stackControl;
    } else {
      alert("Stack Overflow");
    }
  };
  this.pop = function () {
    if (this.isEmpty()) {
      alert("Stack Underflow");
    } else {
    return this.stackControl.pop();
    }
  };
}
