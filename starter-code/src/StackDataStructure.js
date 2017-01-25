function StackDataStructure () {
  var number=0;
  this.stackControl=[];
  this.MAX_SIZE=number;
}
StackDataStructure.prototype.isEmpty=function(){
  if(this.stackControl.length === 0){return ;}else{return false;}
};
StackDataStructure.prototype.canPush=function(){
  if(this.stackControl.length === 0){return ;}else{return false;}
};
