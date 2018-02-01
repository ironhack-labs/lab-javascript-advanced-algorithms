function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 8;

  this.isEmpty = function () {
    return this.stackControl.length < 1;
  };

  this.canPush = function () {
    return this.stackControl.length < this.MAX_SIZE;
  };

  this.push = function (input) {
    if (this.canPush() === false) {
      return ('Stack Overflow');
    }
    this.isEmpty();
    this.stackControl.push(input);
    return this.stackControl;
  };

  this.pop = function () {
    if (this.isEmpty() === true) {
      return ('Stack Underflow');
    }
    var temp = this.stackControl[this.stackControl.length - 1];
    this.stackControl.pop();
    return temp;
  };
}
