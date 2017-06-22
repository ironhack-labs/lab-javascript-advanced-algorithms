function StackDataStructure(){
  this.stackControl = [];
  this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function(){
  return !this.stackControl.length;
}

StackDataStructure.prototype.canPush = function(){
  return this.stackControl.length < this.MAX_SIZE;
}

StackDataStructure.prototype.push = function(i){
  if(this.canPush()){
    this.stackControl.push(i);
    return this.stackControl;
  }else{
    return "Stack Overflow";
  }
}

StackDataStructure.prototype.pop = function(){
  return this.isEmpty() ? "Stack Underflow" : this.stackControl.pop();
}
