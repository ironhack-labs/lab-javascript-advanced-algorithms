function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 25;
  this.isEmpty = function() {
    return this.stackControl.length == 0 ? true : false;
  };
  this.canPush = function() {
    return this.stackControl.length == this.MAX_SIZE ? false : true;
  };

  this.push = function(element) {

    var m = this.stackControl.length;
    this.stackControl[m] = element;
    return this.canPush==true ? this.stackControl : "Stack Overflow";

  };
  this.pop = function() {

return this.isEmpty==true ? "Stack Underflow" : this.stackControl.pop();
};
}
