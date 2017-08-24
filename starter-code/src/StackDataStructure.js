function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 1;
}

var stack = new StackDataStructure();

StackDataStructure.prototype.isEmpty = function(){

return (this.stackControl.length > 0) ?  false : true;

};


StackDataStructure.prototype.canPush = function(){
  return (this.stackControl.length > this.MAX_SIZE) ?  false : true;

};

StackDataStructure.prototype.push = function(a){
  this.stackControl.push(a);
  return this.stackControl;

};


StackDataStructure.prototype.pop = function(){

};
