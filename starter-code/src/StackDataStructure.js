function StackDataStructure () {
  this.stackControl=[];
  this.MAX_SIZE = 8;
}

StackDataStructure.prototype.isEmpty = function(){
  if (this.stackControl.length == 0){
    return true;
  }
  return false;
}

StackDataStructure.prototype.canPush = function(){
  if (this.stackControl.length >= this.MAX_SIZE){
    return false;
  }
  return true;
}

StackDataStructure.prototype.push = function(e){
   if (this.canPush()) {
      this.stackControl.push(e);
      return this.stackControl;
   }
   return "Stack Overflow";
  }

StackDataStructure.prototype.pop = function(e){
  if (this.isEmpty()){
    return "Stack Underflow";
  }
  return this.stackControl.pop(e)
}



