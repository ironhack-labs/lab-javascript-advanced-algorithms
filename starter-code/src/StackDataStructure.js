function StackDataStructure () {
  this.MAX_SIZE= 50;
  this.stackControl=[];
  
}

StackDataStructure.prototype.isEmpty= function(){
  return this.stackControl.length===0;
}

StackDataStructure.prototype.canPush = function(){
  return this.stackControl.length!==this.MAX_SIZE;
}

StackDataStructure.prototype.push= function(elt){
  if (this.canPush()){
    this.stackControl.push(elt);
    return this.stackControl;
  }
  else{
    return "Stack Overflow";
}
}

StackDataStructure.prototype.pop = function(){
  return (this.isEmpty()?`Stack Underflow`:this.stackControl.pop());
}

