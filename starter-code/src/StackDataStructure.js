function StackDataStructure () {
  this.stackControl=[];
  this.MAX_SIZE= 9;
}

StackDataStructure.prototype.isEmpty = function(){
  return this.stackControl.length === 0;
};

StackDataStructure.prototype.canPush = function(){
  return this.stackControl.length<this.MAX_SIZE ?  true: false;

};
StackDataStructure.prototype.push = function(a){
  this.stackControl.push(a);
  return this.stackControl.length<this.MAX_SIZE ? this.stackControl: "Stack Overflow";

};

StackDataStructure.prototype.pop = function(){
  return  this.stackControl.length>0 ? this.stackControl[this.stackControl.length -1]: 'Stack Underflow';
};
