function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 8;
}

StackDataStructure.prototype.isEmpty = function(){
 if (this.stackControl.length == 0){
 return true;}
 return false;
 
}

StackDataStructure.prototype.canPush = function(){
  if (this.stackControl.length < this.MAX_SIZE){
 return true;
} return false;
}
StackDataStructure.prototype.push = function(pushedElement){
  if (this.canPush()== false){
    return 'Stack Overflow';
  }
  this.stackControl.push(pushedElement);
  return this.stackControl;
}
StackDataStructure.prototype.pop = function(popedElement){
  if (this.isEmpty()){
    return 'Stack Underflow';
  } 
  return this.stackControl.pop(popedElement);
   
}