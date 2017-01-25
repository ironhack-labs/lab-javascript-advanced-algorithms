
function StackDataStructure () {
  var number=20;
  this.stackControl=[];
  this.MAX_SIZE=number;
}
StackDataStructure.prototype.isEmpty=function(){
  if(this.stackControl.length === 0){return true ;}else{
    console.log("that stack is not empty");
    return false;}
    //console.log(this.stackControl.length);
};
StackDataStructure.prototype.canPush=function(){
  if(this.stackControl.length <this.MAX_SIZE ){return true ;}else{
    return false;}
    //console.log(this.MAX_SIZE);
};
StackDataStructure.prototype.push=function(obj){
  if(this.canPush()){
    this.stackControl.push(obj);
      return this.stackControl;
      //console.log(this.stackControl;
  }else{return 'Stack Overflow';}
};
StackDataStructure.prototype.pop=function(){
  if(this.isEmpty()){
    return 'Stack Underflow';
  }else{
    return this.stackControl.pop;}
};
var stack =new StackDataStructure();
stack.isEmpty();
stack.canPush();
stack.push(19);
stack.push(88);
