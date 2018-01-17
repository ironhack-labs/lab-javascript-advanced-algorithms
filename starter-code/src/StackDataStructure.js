function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 8;
}
StackDataStructure.prototype.isEmpty = function(stack) {
  return this.stackControl.length == 0;
};
StackDataStructure.prototype.canPush = function(stack) {
  return this.stackControl.length < this.MAX_SIZE

};
StackDataStructure.prototype.push = function(a) {
  if (this.canPush()) {
    this.stackControl.push(a);
    return this.stackControl;
  }else if (this.stackControl >= this.MAX_SIZE){
      return "Stack Overflow"
  }
};
StackDataStructure.prototype.pop = function(a) {
  if (this.isEmpty()) {
    return "Stack Underflow";
  }   
  return this.stackControl.pop(this.stackControl.length-1)
    
};
 