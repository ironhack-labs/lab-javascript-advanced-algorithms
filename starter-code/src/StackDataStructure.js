function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 2;
}

StackDataStructure.prototype.isEmpty = function() {
  return this.stackControl.length == 0;
}

StackDataStructure.prototype.canPush = function() {
  return this.stackControl.length < this.MAX_SIZE;
}

StackDataStructure.prototype.push = function(num) {
  if (this.canPush()) {
    this.stackControl.push(num)
  } else {
    return "Stack Overflow";
  }
  return this.stackControl;
}

StackDataStructure.prototype.pop = function(){
  if (this.isEmpty()) {
    return 'Stack Underflow';
  }
  return this.stackControl.pop();
}
