function StackDataStructure(){
  this.stackControl = [];
  this.MAX_SIZE = 8;

  StackDataStructure.prototype.isEmpty = function() {
    return this.stackControl.length == 0 ? true : false;
    }
  StackDataStructure.prototype.canPush = function() {
    return this.stackControl.length < this.MAX_SIZE ? true : false;
    }
  StackDataStructure.prototype.push = function(newElement) {
    if (this.stackControl.length === this.MAX_SIZE) {
    return 'Stack Overflow';
    }
    else {
      this.stackControl.push(newElement);
      return this.stackControl;
    }
  }

  StackDataStructure.prototype.pop = function() {
    if (this.stackControl.length == 0) {
      return 'Stack Underflow'
    }
    else {
    return this.stackControl.pop();
    }
  }
}
