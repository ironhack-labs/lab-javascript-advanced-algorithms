function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 8;
}

StackDataStructure.prototype.isEmpty = function(){
  if (this.stackControl.length == 0) {
    return true;
  }
  return false;
}

StackDataStructure.prototype.canPush = function(){
  if (this.stackControl.length < this.MAX_SIZE) {
    return true;
  }
  return false;
}

StackDataStructure.prototype.push = function(i){
  if (this.stackControl.length == this.MAX_SIZE) {
    return "Stack Overflow";
  }
  this.stackControl.push(i)
  return this.stackControl;
}

StackDataStructure.prototype.pop = function(){
  if (this.stackControl.length == 0) {
    return "Stack Underflow"
  }
  return this.stackControl.pop();
}
