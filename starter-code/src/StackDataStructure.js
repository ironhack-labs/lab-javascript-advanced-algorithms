function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 10;

  this.isEmpty = function () {
    return this.stackControl.length == 0;
  }

  this.canPush = function () {
    return this.MAX_SIZE > this.stackControl.length;
  }

  this.push = function (newEl) {
    if (this.canPush()) {
      this.stackControl.push(newEl);
      return this.stackControl;
    } return "Stack Overflow";
  }

  this.pop = function () {
    if (!this.isEmpty()) {
      return this.stackControl.pop();
    } return "Stack Underflow";
  }
}
