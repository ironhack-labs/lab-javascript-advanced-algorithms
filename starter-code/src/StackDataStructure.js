function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 5;
  }

StackDataStructure.prototype.isEmpty = function (){
  return this.stackControl.length == 0 ? true : false;
};

StackDataStructure.prototype.canPush = function (){
  if (this.stackControl.length === this.MAX_SIZE) {
    return false;
  }
  else{
    return true;
  }
};

StackDataStructure.prototype.push = function (a){

  if (this.stackControl.length < this.MAX_SIZE) {
    this.stackControl.push(a);
    return this.stackControl;
   }
   else{
     return "Stack Overflow";
   }
};

StackDataStructure.prototype.pop = function (){
  if (this.stackControl.length === 0) {

    return "Stack Underflow";

   }
   else{
     return this.stackControl.pop();
   }
};
