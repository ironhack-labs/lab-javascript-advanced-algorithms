function StackDataStructure () {
  this.MAX_SIZE = 10;
  this.stackControl = [];
}

StackDataStructure.prototype.push = function(element){
  if (this.canPush())
  {
    this.stackControl.push(element);
    return this.stackControl;
  }
  else
  {
    return 'Stack Overflow';
  }
}
StackDataStructure.prototype.pop = function(){
  if (!this.isEmpty())
  {
    var element=this.stackControl[this.stackControl.length-1];
    this.stackControl.splice(this.stackControl.length-1,1);
    return element;
  }
  else
  {
    return 'Stack Underflow';
  }
}
StackDataStructure.prototype.canPush = function(){
  if(this.stackControl.length === this.MAX_SIZE) return false;
  else return true;
}
StackDataStructure.prototype.isEmpty = function(){
  if(this.stackControl.length === 0) return true;
  else return false;
}