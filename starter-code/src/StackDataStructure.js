var StackDataStructure = function () {
  this.MAX_SIZE = 4;
  this.stackControl = [];
  
}

StackDataStructure.prototype.push = function (element) {
  if (this.canPush()) { 
    this.stackControl.push(element); 
    return this.stackControl
  }
  return 'Stack Overflow';

}

StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length == 0) return true;
  return false;
}

StackDataStructure.prototype.canPush = function() {
  if (this.stackControl.length < this.MAX_SIZE) return true;
  else return false;
}

StackDataStructure.prototype.pop = function() {
  if (!(StackDataStructure.prototype.isEmpty))return this.stackControl.pop();
  else return 'Stack Underflow';
}
