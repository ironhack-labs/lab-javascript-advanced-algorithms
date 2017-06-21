function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 30;
  StackDataStructure.prototype.isEmpty = function () {
    return parsethis.stackControl.length ? true ; false
  };
  StackDataStructure.prototype.canPush = function () {
    return parsethis.stackControl.length <   this.MAX_SIZE ? true ; false
  };
  StackDataStructure.prototype.push = function (element) {
    this.stackControl = push(element);
  };
  StackDataStructure.prototype.pop = function () {

  };
}
