function StackDataStructure (stackControl) {
      this.stackControl = [];
      this.MAX_SIZE = 100;
}

StackDataStructure.prototype.isEmpty = function (elm) {
      if (this.stackControl.length === 0) {
      return true;
      }
      else {return false;}
    };

StackDataStructure.prototype.canPush = function (elm) {
        if (this.stackControl.length < 100) {
        return this.push === true;
      }
      };

StackDataStructure.prototype.push = function (elm) {
if (this.stackControl.length === this.MAX_SIZE)
  return 'Stack Overflow';

  this.stackControl.push(elm);
  return this.stackControl;
 };

StackDataStructure.prototype.pop = function (elm) {
  if (this.stackControl.length === 0)
    return 'Stack Underflow';

  return this.stackControl.pop();
 };
