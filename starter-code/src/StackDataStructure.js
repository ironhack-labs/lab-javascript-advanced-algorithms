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
    return this.stackControl;

  };
  this.pop = function() {};
return this.stackControl.pop();
}
