function StackDataStructure (num) {
  this.stackControl = [];
  this.MAX_SIZE = 5;

}

StackDataStructure.prototype.isEmpty = function () {
  if(this.stackControl.length == 0){
    return true;
  }else{
      return false;
  }
};
StackDataStructure.prototype.canPush = function () {
  if(this.stackControl.length < this.MAX_SIZE){
    return true;
  }else{
    return false;
  }
};
StackDataStructure.prototype.push = function (element) {
  if(this.canPush()){
    this.stackControl.push(element);
  }else{
    return "Stack Overflow";
  }
  return this.stackControl;
};
StackDataStructure.prototype.pop = function () {
  if(this.isEmpty()){
    return "Stack Underflow";
  }else{
    return this.stackControl.pop();
  }
};
