function StackDataStructure () {
  var that = this;
  this.stackControl = [];
  this.MAX_SIZE = 8;
  this.isEmpty = function () {
    if (that.stackControl.length === 0) {
      return true;
    } else {
      return false;
    }
  };
  this.canPush = function () {
    if (that.stackControl.length !== that.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  };
  this.push = function (x) {
    if (that.canPush()) {
      that.stackControl.push(x);
    } else {
      return ("Stack Overflow");
    }
    return that.stackControl;
  };
  this.pop = function () {
    if (that.stackControl.length !== 0) {
      return that.stackControl.pop();
    } else {
      return ('Stack Underflow');
    }
  };
}
