function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 10;


}
StackDataStructure.prototype.isEmpty = function(){
  return this.stackControl.length === 0 ;
};
StackDataStructure.prototype.canPush = function(){
  if (this.MAX_SIZE > this.stackControl.length){
      return true;
  } else {
      return false;
}
};
StackDataStructure.prototype.push = function(arg){
  if (this.MAX_SIZE > this.stackControl.length){
    this.stackControl.push(arg);
  return this.stackControl;
  } else {
    return ("Stack Overflow");
}
};

StackDataStructure.prototype.pop = function(){
  if (this.stackControl.length === 0){
      return "Stack Underflow";
  } else {
      this.stackControl.pop();
      return this.stackControl[this.stackControl.length];
  }

};
