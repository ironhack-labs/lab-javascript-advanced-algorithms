function StackDataStructure () {
  this.stackControl=[];
  this.MAX_SIZE=10;
}


StackDataStructure.prototype.isEmpty= function() {
  if (this.stackControl.length===0) {
  return true;
} else {
  return false;
}

};
StackDataStructure.prototype.canPush=function() {
 if (this.MAX_SIZE===this.stackControl.length){
  return false;
} else {
  return true;
}
};
StackDataStructure.prototype.push=function(number) {
if (this.canPush()) {
  this.stackControl.push(number);
  return this.stackControl;
}
else {
  return "Stack Overflow";
}

};

StackDataStructure.prototype.pop= function(number) {

  if (this.isEmpty()) {
    return "Stack Underflow";
  }
  else {
    return this.stackControl.pop();
  }

};
