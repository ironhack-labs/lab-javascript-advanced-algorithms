
function StackDataStructure () {
  this.stackControl=[];
  this.MAX_SIZE=8;
}

StackDataStructure.prototype.isEmpty= function(){
    if (this.stackControl.length == 0) {
    return true;
  } else{
    return false;
  }
  };

StackDataStructure.prototype.canPush= function(){
  return (this.stackControl.length<this.MAX_SIZE)
};

StackDataStructure.prototype.push=function(number){
  if (this.canPush()){
    this.stackControl.push(number);
    return this.stackControl;
  }else{
    return "Stack Overflow";
  }
}

StackDataStructure.prototype.pop=function(number){
  this.stackControl.pop();
  if (!this.isEmpty()) {
    return this.stackControl[this.stackControl.length-1];
  }else{
    return "Stack Underflow";
  }
}
