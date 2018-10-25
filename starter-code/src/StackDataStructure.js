function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function () {
  if (this.stackControl.length === 0) {
    return true
  } 
      return false
}

StackDataStructure.prototype.canPush = function (item) {
  if (this.stackControl.length < this.MAX_SIZE) {
    return true
  }
      return false
}

StackDataStructure.prototype.push = function (item) {
  if (this.canPush()) {
    this.stackControl.push(item);
     return this.stackControl
  }
      return ("Stack Overflow")
}

StackDataStructure.prototype.pop = function (item) {
  if (this.isEmpty()) {
    return ("Stack Underflow")
  } 
      return this.stackControl.pop(item);
}
