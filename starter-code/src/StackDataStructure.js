
//declare stack constructor function
function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 10;
}
//checks if stack is empty
StackDataStructure.prototype.isEmpty = function(){
    return this.stackControl.length === 0;
};
//check if free space
StackDataStructure.prototype.canPush = function(){
    return this.stackControl.length < this.MAX_SIZE;
  };
//push method
StackDataStructure.prototype.push = function(number){
    if (this.canPush()) {
       this.stackControl.push(number);
       return this.stackControl;
    }else {
      return "Stack Overflow";
    }
};
//pop method
StackDataStructure.prototype.pop = function(){
  if (!this.isEmpty()) {
    return this.stackControl.pop();
  }else {
    return "Stack Underflow";
  }
};
