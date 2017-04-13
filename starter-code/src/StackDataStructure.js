function StackDataStructure () {
this.stackControl = [];
this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function(){
  var activeBars = this.stackControl.length;
  if (activeBars === 0){
    return true;
  } else {
    return false;
  }
};

StackDataStructure.prototype.canPush = function(){
  var activeBars = this.stackControl.length;
  if (activeBars < this.MAX_SIZE) {
    return true;
  } else {
    return false;
  }
};

StackDataStructure.prototype.push = function(bar){
  if (this.canPush()){
    this.stackControl.push(bar);
    return this.stackControl;
  } else {
    return "Stack Overflow";
  }
};

StackDataStructure.prototype.pop = function(){
  if (this.isEmpty()){
    return "Stack Underflow";
  } else {
    return this.stackControl[this.stackControl.length - 1];
  }
};
