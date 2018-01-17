function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 10;
  this.isEmpty = function() {
    return this.stackControl.length === 0 ? true : false;
  };
  this.canPush = function() {
    return this.stackControl.length === this.MAX_SIZE ? false : true;
  };
  this.push = function(element) {
    if (this.canPush() === true) {
      this.stackControl.push(element);
    } else {
      return "Stack Overflow";
    }
    return this.stackControl;
  };
  this.pop = function() {
    if (this.isEmpty() === true) {
      return "Stack Underflow";
    } else {
      var takenElement = this.stackControl[this.stackControl.length - 1];
      this.stackControl.splice(this.stackControl.length - 1, 1);
      return takenElement;
    }
  };
}
