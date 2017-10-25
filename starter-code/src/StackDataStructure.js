function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 8;
};

StackDataStructure.prototype.isEmpty = function() {
  return this.stackControl.length == 0;
};

StackDataStructure.prototype.canPush = function() {
  return this.stackControl.length < this.MAX_SIZE;
};

StackDataStructure.prototype.push = function(e) {
  this.stackControl.push(e);

  if (this.canPush()){
      return this.stackControl;
  } else {
        return "Stack Overflow";
  }
};

StackDataStructure.prototype.pop = function() {
   this.stackControl[this.stackControl.length -1] ;

   if (this.isEmpty()){
     return 'Stack Underflow';
   } else {
     return this.stackControl.pop();
   }
};
