function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 10;
}
var stack = new StackDataStructure();

StackDataStructure.prototype.isEmpty = function() {
  return (this.stackControl.length === 0) ? true : false;
};

StackDataStructure.prototype.canPush = function() {
return (this.stackControl.length === this.MAX_SIZE) ? false : true;
};

StackDataStructure.prototype.push = function(a) {
if(this.canPush()){
  this.stackControl.push(a);
  return this.stackControl;
}else{
  return "Stack Overflow";
}
};

StackDataStructure.prototype.pop = function (){
  if(this.isEmpty()) {
    return "Stack Underflow";
  } else {
    return this.stackControl.pop();
  }

};
