function StackDataStructure () {

  this.stackControl = [];
  this.MAX_SIZE = 9;

  this.isEmpty = function () {
    if (this.stackControl.length === 0)   return true;
      return false;
  };

  this.canPush = function () {
    if (this.stackControl.length < this.MAX_SIZE)   return true;
      return false;
  };

  this.push = function (item) {
    if (this.canPush()) {
        this.stackControl.push(item);
        return this.stackControl;
    } else {
      return "Stack Overflow";
    }
  }; 

  this.pop = function () {
    if (this.isEmpty())   return "Stack Underflow";
      return this.stackControl.pop();
       };
}