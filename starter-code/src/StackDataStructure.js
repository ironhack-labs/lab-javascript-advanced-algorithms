function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function(){
 return this.stackControl.length === 0;

};

StackDataStructure.prototype.canPush = function(){
if(this.stackControl.length >= this.MAX_SIZE){
  return false;
} else {
  return true;
}
};

StackDataStructure.prototype.push = function (e){
   if(this.stackControl.length == this.MAX_SIZE) {
     return "Stack Overflow";
  } else {
    this.stackControl.push(e);
}
return this.stackControl;
};
StackDataStructure.prototype.pop = function (){
if (this.stackControl.length === 0){
  return 'Stack Underflow';
} else{
  return this.stackControl[this.stackControl.length - 1]
}
};
