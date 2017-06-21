function StackDataStructure () {
  this.MAX_SIZE = 10;
  this.stackControl = [];
  this.isEmpty = function () {
    return this.stackControl.length === 0;
  };
  this.canPush = function () {
    return this.stackControl.length < this.MAX_SIZE;
  };
  this.push = function(element) {
    if (this.canPush()) {
      this.stackControl[this.stackControl.length] = element;
      return this.stackControl;
    }
    return 'Stack Overflow';
  };
  this.pop = function() {
    if (this.isEmpty()) {
      return 'Stack Underflow';
    }
    return this.stackControl[this.stackControl.length - 1];
  };
}
