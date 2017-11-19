function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 80;
}

StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length === 0) {
    return true;
  } else {
    return false;
  }
}

StackDataStructure.prototype.canPush = function() {
  if (this.stackControl.length < this.MAX_SIZE) {
    return true;
  } else {
    return false;
  }
}

StackDataStructure.prototype.push = function(element) {
  if (this.canPush() === true){
  this.stackControl.push(element);
  return this.stackControl}
  else {return "Stack Overflow"
}
}

StackDataStructure.prototype.pop = function(array) {
if (this.isEmpty() === false){
    return this.stackControl.pop()
}
else {
  return "Stack Underflow";
}
}
