

function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 8;
}

var stack = new StackDataStructure();

StackDataStructure.prototype.isEmpty = function (){
 return (this.stackControl.length > 0) ? false : true;
};

StackDataStructure.prototype.canPush = function(){
  return this.stackControl.length < this.MAX_SIZE ? true: false;
};

StackDataStructure.prototype.push = function(x){
   this.stackControl.push(x);
   return this.stackControl.length > this.MAX_SIZE ? "Stack Overflow": this.stackControl;

};

StackDataStructure.prototype.pop = function(){
  return (this.stackControl[this.stackControl.length-1] === undefined)? "Stack Underflow" : this.stackControl[this.stackControl.length-1];
};
