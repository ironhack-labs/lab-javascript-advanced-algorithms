
function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 8;
}

var stack = new StackDataStructure();

StackDataStructure.prototype.isEmpty = function(){
  return this.stackControl.length === 0 ? true : false;
  // if(this.stackControl.length === 0){
  //   return true;
  // }else{
  //   return false;
  // }
};

StackDataStructure.prototype.canPush = function(){
  return this.stackControl.length<this.MAX_SIZE ? true : false;
  // if(this.stackControl.length<this.MAX_SIZE){
  //   return true;
  // }else{
  //   return false;
  // }
};

StackDataStructure.prototype.push = function(numToPush){
  if(this.canPush()){
    this.stackControl.push(numToPush);
    return this.stackControl;
  }else{
    return 'Stack Overflow';
  }
};

StackDataStructure.prototype.pop = function(){
  return this.isEmpty() ? 'Stack Underflow' : this.stackControl.pop();
    // if(this.isEmpty()){
    //   return 'Stack Underflow';
    // }else{
    //   return this.stackControl.pop();
    // }
};
