function StackDataStructure () {
  this.stackControl =[];
  this.MAX_SIZE= 8;
}

StackDataStructure.prototype.isEmpty  = function(){
return this.stackControl >0 ? false : true;
};

StackDataStructure.prototype.canPush = function(){
return this.stackControl.length == this.MAX_SIZE ? false : true;

};

StackDataStructure.prototype.push = function(a){
var result = 0;
if(this.stackControl.length < this.MAX_SIZE){
 this.stackControl.push(a);
 result = this.stackControl;
}
else{
  result = "Stack Overflow";
}
return result;
};

StackDataStructure.prototype.pop = function(){


return  this.stackControl.length == 0 ? "Stack Underflow" : this.stackControl.pop();


};
