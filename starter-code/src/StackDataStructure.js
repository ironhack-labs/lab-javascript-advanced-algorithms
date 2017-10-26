function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 1;
}

StackDataStructure.prototype.isEmpty = function(){
  if(this.stackControl.length == 0){
    return true;
  }else{
    return false;
  }

};

StackDataStructure.prototype.canPush = function(){
  if(this.stackControl.length < this.MAX_SIZE){
    return true;
  }
  else{
    return false;
  }

};

StackDataStructure.prototype.push = function(x){

  if(this.stackControl.length >= this.MAX_SIZE){
    return "Stack Overflow";}
  this.stackControl.push(x);
  return this.stackControl;

};

StackDataStructure.prototype.pop = function(){
  if(this.stackControl.length == 0){
    return "Stack Underflow";}
  var number = this.stackControl[this.stackControl.length-1];
  this.stackControl.pop();
  return number;
};
