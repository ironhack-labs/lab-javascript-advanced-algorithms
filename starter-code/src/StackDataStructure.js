function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 10;
  this.isEmpty = function () {
    return this.stackControl.length === 0;
  };
  this.canPush = function () {
    return this.stackControl.length < this.MAX_SIZE;
  };
  this.push = function (data) {
    if ( this.canPush() ) {
      this.stackControl.push(data);
      return this.stackControl;
    }
    else { return 'Stack Overflow'; }
  };
  this.pop = function () {
    if ( !this.isEmpty() ) {
      var toReturn = this.stackControl[this.stackControl.length - 1];
      this.stackControl.pop();
      return toReturn;
    }
    else { return 'Stack Underflow'; }
  };
}
