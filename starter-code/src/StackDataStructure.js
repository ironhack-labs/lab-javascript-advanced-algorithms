function StackDataStructure () {
  this.MAX_SIZE=10;
  this.stackControl = [];
  return this;
}
StackDataStructure.prototype.isEmpty = function () {
  return this.stackControl.length===0?true:false;
}
StackDataStructure.prototype.canPush = function () {
  return this.stackControl.length<this.MAX_SIZE?true:false;
}
StackDataStructure.prototype.push = function (element) {
  if( this.canPush() ) { this.stackControl.push(element); return this.stackControl;}
  else { return  "Stack Overflow"}
}
StackDataStructure.prototype.pop = function (element) {
  return this.isEmpty() ? 'Stack Underflow' : this.stackControl.pop();
}
