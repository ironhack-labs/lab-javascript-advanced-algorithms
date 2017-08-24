function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 8;
}

StackDataStructure.prototype.isEmpty = function(){
  return true;
};

StackDataStructure.prototype.canPush = function(){
  return true;
};

StackDataStructure.prototype.push = function(x){
  this.stackControl.push(x);
  this.MAX_SIZE -= 1;
  this.isEmpty = function(){
    return false;
  };
  if (this.MAX_SIZE == 1){
    this.canPush = function(){
      return false;
    };
    return 'Stack Overflow';
  }
  return this.stackControl;
};

StackDataStructure.prototype.pop = function(x){
  if (this.stackControl.length == 0){
    return 'Stack Underflow';
  }
  return this.stackControl.pop(x);
};
