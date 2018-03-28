function StackDataStructure () {
  this.MAX_SIZE = 10;
  this.stackControl = [];
}

StackDataStructure.prototype.canPush = function() {
    if (this.stackControl.length < this.MAX_SIZE) {
      this.push();
      return true;
    } else {
      return false;
    }
  }
  
StackDataStructure.prototype.isEmpty = function() {
    return (this.stackControl.length == 0)
}

StackDataStructure.prototype.push = function(i) {
  if(this.stackControl.length < this.MAX_SIZE) {
    this.stackControl.push(i);
    return this.stackControl;
  } else {
    this.stackControl.push("Stack Overflow");
    return "Stack Overflow";
  }
}
StackDataStructure.prototype.pop = function() {
  if(this.stackControl.length == 0) {
    return "Stack Underflow"}
    else {
      return this.stackControl.pop(); 
    }
 }
