function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 0;



}
StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl[0] == undefined) {
    return true;

  } else {
    return false
  }

};
StackDataStructure.prototype.canPush = function() {
  this.stackControl.push(1);
  if (this.stackControl[0] == 1) {
    return true;

  } else {
    return false;
  }
  this.stackControl.pop();

};
StackDataStructure.prototype.push = function(number) {
  this.MAX_SIZE++;
  this.stackControl.push(number);
  if (this.MAX_SIZE == 3) {
    return 'Stack Overflow';

  }
  return this.stackControl;



};
StackDataStructure.prototype.pop = function() {
  if (this.stackControl[0] == undefined) {
    return 'Stack Underflow';

  }


  return this.stackControl.pop();




};
